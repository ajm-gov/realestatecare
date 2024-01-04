<template>
    <Layout>
        <ExitComponent label="Back to Jobs Overview" routerLink="/jobs/scheduled" />
        <ModificationForm />
    </Layout>
</template>

<script setup lang="ts">
    import Layout from '@/components/Layout.vue'
    import ModificationForm from '@/components/scheduledjobs/jobForms/ModificationForm.vue'
    import ExitComponent from '@/components/ExitComponent.vue';
</script>