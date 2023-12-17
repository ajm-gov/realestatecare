<template>
    <ion-card class="headerCard">
        <ion-card-content color="light">
            <ion-row>
                <ion-chip>
                    <ion-avatar>
                        <img src="@/assets/img/fred.jpeg" width="">
                    </ion-avatar>
                    <ion-label class="bold" color="light">{{ nameString() }}</ion-label>
                </ion-chip>
            </ion-row>
            <ion-chip class="bold smallGap">
                <ion-badge color="light">{{ scheduledJobCount }}</ion-badge>
                <ion-label color="light">Open tasks for you today</ion-label>
            </ion-chip>
            </ion-card-content>
        </ion-card>
</template>

<script setup lang="ts">
import { 
    IonCard, 
    IonCardContent, 
    IonBadge,
    IonLabel,
    IonRow,
    IonAvatar,
    IonChip,
} from '@ionic/vue';

import { ref, onMounted } from 'vue';
import { userDetailsStore } from '@/stores/userDetails';

import { getScheduledJobs } from '@/api/getScheduledJobs';

const store = userDetailsStore();

const scheduledJobCount = ref<number | null>(null);

onMounted(async () => {
    const scheduledJobsResponse = await getScheduledJobs();
    scheduledJobCount.value = scheduledJobsResponse.length;
});

const nameString = () => {
    if (store.firstName !== "") {
        return `Hello ${store.firstName} ${store.lastName}`
    } else {
        return "Hello user"
    }
}

</script>