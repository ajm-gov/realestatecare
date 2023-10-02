

<template>
    <ion-grid :fixed="true">
        <ion-row>
            <ion-col>
                <ion-text>
                    <h1>{{ individualCompletedJobs?.clientName }}</h1>
                </ion-text>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<script setup lang="ts">
    import { ref, onMounted, defineProps} from 'vue';
    import { IonGrid, IonRow, IonCol, IonText } from '@ionic/vue';
    import {getCompletedJobDetails} from '@/api/getCompletedJobs'
    import { completedJob } from '@/types/completedjob'


    const { id } = defineProps(['id']);
    // const { jobType } = defineProps(['jobType']);

    const individualCompletedJobs = ref<completedJob>();


    onMounted(async () => {
        try {
            console.log(`The ID is ${id}`);
            const response = await getCompletedJobDetails(id);

            individualCompletedJobs.value = response;
        } catch (error) {
            console.error('Error fetching job details:', error);
        }
    });


</script>