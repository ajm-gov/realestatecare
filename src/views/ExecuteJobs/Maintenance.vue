<template>
    <Layout>
        <ExitComponent label="Back to Jobs Overview" routerLink="/jobs/scheduled" />
        <MaintenanceForm />
    </Layout>
</template>

<script setup lang="ts">
    import Layout from '@/components/Layout.vue'
    import MaintenanceForm from '@/components/scheduledjobs/jobForms/MaintenanceForm.vue'
    import ExitComponent from '@/components/ExitComponent.vue';
</script>