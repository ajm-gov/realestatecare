<template>
    <ion-grid>
        <ion-row class="header">
            <ion-text>
                <h1>Knowledge Base</h1>
            </ion-text>
        </ion-row>
    </ion-grid>

    <ion-searchbar
        :animated="true"
        placeholder="Find a help article"
        show-clear-button="focus"
    >
    </ion-searchbar>
</template>

<style scoped>
ion-row.header {
    padding: 0 0.5rem;
}
</style>

<script setup lang="ts">
    import {
        IonSearchbar,
        IonText,
        IonCol,
        IonRow,
        IonGrid
    } from "@ionic/vue"
</script>