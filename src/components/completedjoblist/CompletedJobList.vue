<template>
    <ion-grid :fixed="true">
        <ion-row><ion-col>
            <ion-text>
                <h1>Completed Jobs</h1>
            </ion-text>
            <ion-accordion-group>
                <ion-accordion v-for="item in completedJobs" :key="item.id">
                    <ion-item slot="header" color="light">
                        <ion-label>{{ item.clientName }}, {{  readableDate(item.date) }}</ion-label>
                    </ion-item>
                        <div class="ion-padding" slot="content">
                            <ion-row class="smallGap marginBottomSmall">
                                <ion-icon :icon="navigateCircleOutline"></ion-icon>
                                <ion-label>{{ item.location }}</ion-label>
                            </ion-row>
                            <ion-row class="smallGap marginBottomSmall">
                                <ion-icon :icon="constructOutline" ></ion-icon>
                                <ion-label>{{ jobSpecification(item.jobSpecification) }}</ion-label>
                            </ion-row>
                            <ion-row>
                                <ion-text class="underline"><h5>Notes</h5></ion-text>
                                <ion-text class="marginBottomSmall">{{ item.notes }}</ion-text>
                            </ion-row>
                        </div>
                </ion-accordion>
            </ion-accordion-group>
        </ion-col>                
        </ion-row>
    </ion-grid>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { 
        IonList,
        IonListHeader,
        IonLabel,
        IonItem,
        IonRow,
        IonCol,
        IonGrid,
        IonIcon,
        IonAccordion,
        IonAccordionGroup,
        IonText
    } from '@ionic/vue';
    import { navigateCircleOutline, constructOutline } from 'ionicons/icons';

    import { getCompletedJobs, getCompletedJobDetails } from '@/api/getCompletedJobs';
    import { completedJob } from '@/types/completedjob'
    import { RouterLink } from 'vue-router';
    import {readableDate} from '@/utils/readDate';
    import { jobSpecification } from '@/utils/transformMessage';

    const completedJobs = ref<completedJob[]>([]);

    onMounted(async () => {
        try {
            const response = await getCompletedJobs();
            const individualResponse = await getCompletedJobDetails(1);
            const individualResponseString = JSON.stringify(individualResponse);
            console.log(`Individual Response for job 1: ${individualResponseString}`);
            // Sort data by date
            response.sort((a: completedJob, b: completedJob) => {
                const dateA = new Date(a.date) as any;
                const dateB = new Date(b.date) as any;
                return dateB - dateA;
            });
            completedJobs.value = response;
        } catch (error) {
            console.error('Error fetching Completed Jobs:', error);
        }
    });
</script>