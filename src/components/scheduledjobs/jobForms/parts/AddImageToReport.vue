<template>
    <ion-text>Add image to report</ion-text>
                <ion-button color="light" @click="() => handleCapture(openCamera)"><ion-icon slot="start" :icon="camera"></ion-icon>Open Camera</ion-button>
                <ion-button color="light" @click="() => handleCapture(openGallery)"><ion-icon slot="start" :icon="images"></ion-icon>Open Gallery</ion-button>
                <input v-if="capturedImage !== null" type="image" :src="capturedImage ?? ''">
                <ion-button shape="round" fill="clear" v-if="capturedImage !== null" @click="() => handleImageDelete()">Delete Image</ion-button>
</template>

<style scoped>
    ion-text {
        margin-top: 1rem;
        text-decoration: underline;
        font-size: 1.2rem;
    }
</style>

<script setup lang="ts">
    import { 
        IonButton,
        IonText,
        IonIcon
    } from '@ionic/vue';
    import { camera, images } from 'ionicons/icons';
    import { ref } from 'vue';

    import { openCamera, openGallery } from "@/utils/openPhoneCamera";

    const capturedImage = ref<string | null>(null);

    const handleCapture = async (captureFunction: () => Promise<string>) => {
        const imageData = await captureFunction();
        capturedImage.value = imageData;
    };

    const handleImageDelete = () => {
        capturedImage.value = null;
        console.log(capturedImage);
    }


</script>