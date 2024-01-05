<template>
    <div class="datetimegroup">
        <ion-label>Date</ion-label>
        <ion-datetime-button datetime="datetime"></ion-datetime-button>

    </div>

    <ion-modal :keep-contents-mounted="true">
        <ion-datetime id="datetime"></ion-datetime>
    </ion-modal>
</template>

<style scoped>
    .datetimegroup {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 1rem;
    }
</style>

<script setup lang="ts">
    import { IonDatetime, IonDatetimeButton, IonModal, IonLabel } from '@ionic/vue';
</script>