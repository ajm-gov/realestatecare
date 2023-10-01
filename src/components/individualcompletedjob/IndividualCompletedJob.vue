

<template>
        <h1>{{ individualCompletedJobs?.clientName }}</h1>
</template>

<script setup lang="ts">
    import { ref, onMounted, defineProps} from 'vue';
    import {getCompletedJobDetails} from '@/api/getCompletedJobs'
    import { completedJob } from '../completedjoblist/types'


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