<template>
    <ion-row>
        <ion-list>
            <ion-list-header>
                <ion-label><h1>Completed Jobs</h1></ion-label>
            </ion-list-header>
            <router-link 
                v-for="item in completedJobs" 
                :key="item.id"
                :to="{ name: 'completedJob', params: {id: item.id, jobType: item.jobSpecification}}"
            >
                <ion-item>
                    <ion-row>
                        <ion-label>{{ item.clientName }}</ion-label>
                    </ion-row>
                </ion-item>
            </router-link>
            </ion-list>
    </ion-row>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { 
        IonList,
        IonListHeader,
        IonLabel,
        IonItem,
        IonRow,
    } from '@ionic/vue';
    import { getCompletedJobs, getCompletedJobDetails } from '@/api/getCompletedJobs';
    import { completedJob } from './types'
    import { RouterLink } from 'vue-router';

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