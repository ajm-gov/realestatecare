<template>
    <ion-page>
        <ion-content>
            <LoginForm />
        </ion-content>
    </ion-page>
</template>

<style>
    ion-content {
        padding: 4rem 2rem;
    }
</style>

<script setup lang="ts">
    import LoginForm from '@/components/LoginForm.vue';
    import {
        IonPage,
        IonContent
    } from "@ionic/vue";
</script>