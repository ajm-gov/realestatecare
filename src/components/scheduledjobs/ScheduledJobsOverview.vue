<template>
    <ion-grid>
        <ion-row v-for="item in scheduledJobs" :key="item.id">
            <ion-col>
                <ion-card>
                    <ion-card-header>
                        <ion-card-title>{{ item.company }}</ion-card-title>
                        <ion-card-subtitle>{{ readableDate(item.date_to_complete) }}</ion-card-subtitle>
                    </ion-card-header>
                    <ion-card-content>
                        <div class="locationcontainer">
                            <ion-icon :icon="navigateCircleOutline"></ion-icon>
                            <ion-label>{{ item.city }}</ion-label>
                        </div>
                        {{ item.notes }}
                    </ion-card-content>
                    <ion-button fill="clear" @click="navigateToReportForm(item)">Start job</ion-button>
                </ion-card>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<style scoped>
    .locationcontainer {
        display: flex;
        align-items: center;
        gap: 5px;
        line-height: 0;
        margin-bottom: 1rem;
    }
</style>

<script setup lang="ts">
import { 
    IonCard, 
    IonBadge,
    IonLabel,
    IonRow,
    IonCol,
    IonAvatar,
    IonChip,
    IonCardTitle,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonIcon
} from '@ionic/vue';

import { navigateCircleOutline, constructOutline } from 'ionicons/icons';

import { ref, onMounted } from 'vue';
import { scheduledJob } from '@/types/scheduledJob';
import {readableDate} from '@/utils/readDate';
import { getScheduledJobs } from '@/api/getScheduledJobs';
import router from '@/router';

const scheduledJobs = ref<scheduledJob[]>([]);

onMounted(async () => {
    try {
        const response = await getScheduledJobs();
        scheduledJobs.value = response;
    } catch (error) {
        console.error('Error fetching Scheduled Jobs:', error);

    }
})

const navigateToReportForm = (job: scheduledJob) => {
    const route = { name: 'damage-form', params: { jobId: job.id}};
    router.push(route)
}


</script>