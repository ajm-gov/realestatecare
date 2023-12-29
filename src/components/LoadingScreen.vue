<template>
    <div class="centerbox">
        <ion-spinner name="lines-sharp"></ion-spinner>
        <ion-text>One moment, we're getting things ready</ion-text>
    </div>
</template>

<style scoped>
    .centerbox {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        flex-direction: column;
        gap: 3rem;
    }
    
</style>

<script setup lang="ts">

import { IonSpinner, IonText } from '@ionic/vue';

</script>