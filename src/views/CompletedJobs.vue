<template>
    <Layout>
        <ion-content>
            <CompletedJobList />
        </ion-content>
    </Layout>
</template>

<script setup lang="ts">
    import Layout from '@/components/Layout.vue';
    import CompletedJobList from '@/components/completedjoblist/CompletedJobList.vue';
    import {
        IonContent 
    } from '@ionic/vue';
</script>