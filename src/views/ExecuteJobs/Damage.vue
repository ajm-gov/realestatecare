<template>
    <Layout>
        <ExitComponent label="Back to Jobs Overview" routerLink="/jobs/scheduled" />
        <DamageForm />
    </Layout>
</template>

<script setup lang="ts">
    import Layout from '@/components/Layout.vue'
    import DamageForm from '@/components/scheduledjobs/jobForms/DamageForm.vue'
    import ExitComponent from '@/components/ExitComponent.vue';
</script>