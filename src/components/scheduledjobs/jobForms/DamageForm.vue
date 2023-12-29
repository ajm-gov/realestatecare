<template>
    <LoadingScreen v-if="isLoading" />
    <div v-if="!isLoading" class="contentPadding">
    <ion-title>Damage Report Form</ion-title>
    <form>
        <ion-list>
                <ion-input v-model="individualJobDetail.company" label-placement="stacked" fill="outline" label="Company Name"/>
                <ion-input v-model="individualJobDetail.city" label-placement="stacked" fill="outline" label="City" />
                <ion-input v-model="individualJobDetail.postal_code" label-placement="stacked" fill="outline" label="Postal Code" />
                <ion-input v-model="individualJobDetail.province" label-placement="stacked" fill="outline" label="Province" />
                <ion-input v-model="individualJobDetail.housenumber" label-placement="stacked" fill="outline" label="Housenumber" />
                <ion-checkbox label-placement="end" justify="start">New Damage?</ion-checkbox>
                <ion-select label="Damage Type">
                    <ion-select-option value="deliberate">Deliberate</ion-select-option>
                    <ion-select-option value="wear">Wear</ion-select-option>
                    <ion-select-option value="violence">Violence</ion-select-option>
                    <ion-select-option value="normal-use">Normale Use</ion-select-option>
                    <ion-select-option value="calamity">Calamity</ion-select-option>
                    <ion-select-option value="other">Other</ion-select-option>
                </ion-select>
                <ion-datetime></ion-datetime>
                <ion-checkbox label-placement="end" justify="start">Demands immediate attention</ion-checkbox>
                <ion-textarea v-model="individualJobDetail.notes" label="Notes"></ion-textarea>
                <ion-button @click="openCamera">Open Camera</ion-button>
                <ion-button @click="openGallery">Select from Gallery</ion-button>
        </ion-list>
    </form>
    </div>
</template>

<style scoped>
    ion-list {
        padding: 2rem 1rem;
        display: flex;
        gap: 1rem;
        flex-direction: column;
    }

    input {
        margin-bottom: 1rem;
    }
</style>
<script setup lang="ts">
    import { 
        IonInput,
        IonList,
        IonCheckbox,
        IonSelect,
        IonDatetime,
        IonTextarea,
        IonTitle,
        IonButton
    } from '@ionic/vue';
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const jobId = ref(route.params.jobId);

    import { getIndividualScheduledJob } from '@/api/getScheduledJobs';
    import { baseScheduledJob } from '@/types/scheduledJob';
    import LoadingScreen from '@/components/LoadingScreen.vue';
    import { openCamera, openGallery } from "@/utils/openPhoneCamera";

    const capturedImage = ref<string | null>(null);

    const handleCapture = async (captureFunction: () => Promise<string>) => {
        const imageData = await captureFunction();
        capturedImage.value = imageData;
    };

    const individualJobDetail = ref<baseScheduledJob>({
        id: 0,
        company: '',
        city: '',
        postal_code: '',
        province: '',
        housenumber: 0,
        additions: '',
        street: '',
        notes: '',
    });

    const isLoading = ref(true);

    onMounted(async () => {
        try {
            const response = await getIndividualScheduledJob(Number(jobId.value));
            individualJobDetail.value = response;
            
        } catch (error) {
            console.error('Error fetching individual job details', error)
        } finally {
            setTimeout(() => {
                isLoading.value = false;
            }, 1000)
        }
        
    });


</script>