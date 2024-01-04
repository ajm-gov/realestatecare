<template>
    <Layout>
            <ExitComponent label="Back to Homescreen" routerLink="/" />
            <Settings />
    </Layout>
</template>

<script setup lang="ts">
    import Layout from '@/components/Layout.vue';
    import Settings from '@/components/settings/Settings.vue';
    import ExitComponent from '@/components/ExitComponent.vue';
</script>