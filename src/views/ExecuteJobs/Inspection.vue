<template>
    <Layout>
        <ExitComponent label="Back to Jobs Overview" routerLink="/jobs/scheduled" />
        <InspectionForm />
    </Layout>
</template>

<script setup lang="ts">
    import Layout from '@/components/Layout.vue'
    import InspectionForm from '@/components/scheduledjobs/jobForms/InspectionForm.vue'
    import ExitComponent from '@/components/ExitComponent.vue';
</script>