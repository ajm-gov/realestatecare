<template>
    <ion-item color="primary" @click="navigateBack(routerLink)">
        <ion-icon :icon="arrowBackOutline" slot="start"></ion-icon>
        <ion-label>{{ label }}</ion-label>
    </ion-item>
</template>

<script setup lang="ts">
    import { 
        IonIcon,
        IonLabel,
        IonItem
    } from '@ionic/vue';

    import { arrowBackOutline } from 'ionicons/icons';

    import { defineProps } from 'vue';

    import router from "@/router"

    const props = defineProps(['label', 'routerLink']);

    const navigateBack = (routerLink: string) => {
        router.push(routerLink);
    }
</script>