<template>
    <Layout>
        <ExitComponent label="Back to Homescreen" routerLink="/home" />
        <ScheduledJobsOverview />
    </Layout>
</template>

<script setup lang="ts">
    import Layout from '@/components/Layout.vue';
    import ScheduledJobsOverview from '@/components/scheduledjobs/ScheduledJobsOverview.vue';
    import ExitComponent from '@/components/ExitComponent.vue';
</script>