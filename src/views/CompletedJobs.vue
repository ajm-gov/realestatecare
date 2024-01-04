<template>
    <Layout>
            <ExitComponent label="Back to homescreen" routerLink="/home" />
            <CompletedJobList />
    </Layout>
</template>

<script setup lang="ts">
    import Layout from '@/components/Layout.vue';
    import CompletedJobList from '@/components/completedjoblist/CompletedJobList.vue';
    import ExitComponent from '@/components/ExitComponent.vue';
</script>