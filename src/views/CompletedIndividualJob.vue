

<template>
    <Layout>
        <IndividualCompletedJob :id="id"/>
    </Layout>
</template>

<script setup lang="ts">
    import Layout from '@/components/Layout.vue';
    import IndividualCompletedJob from '@/components/individualcompletedjob/IndividualCompletedJob.vue';

    const { id } = defineProps(['id']);


</script>