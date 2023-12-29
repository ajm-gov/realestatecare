<template>
    <LoadingScreen v-if="isLoading" />
    <div v-if="!isLoading" class="contentPadding">
    <ion-title>Maintenance Form</ion-title>
    <form>
        <ion-list>
                <ion-input v-model="individualJobDetail.company" label-placement="stacked" fill="outline" label="Company Name"/>
                <ion-input v-model="individualJobDetail.city" label-placement="stacked" fill="outline" label="City" />
                <ion-input v-model="individualJobDetail.postal_code" label-placement="stacked" fill="outline" label="Postal Code" />
                <ion-input v-model="individualJobDetail.province" label-placement="stacked" fill="outline" label="Province" />
                <ion-input v-model="individualJobDetail.housenumber" label-placement="stacked" fill="outline" label="Housenumber" />
                <ion-select label="Maintenance Type">
                    <ion-select-option value="paint">Paintjob</ion-select-option>
                    <ion-select-option value="woodrot">Rotten Wood</ion-select-option>
                    <ion-select-option value="electronics">Electronics</ion-select-option>
                    <ion-select-option value="plumbing">Work on Plumbing</ion-select-option>
                    <ion-select-option value="glasswork">Glasswork</ion-select-option>
                    <ion-select-option value="other">Other</ion-select-option>
                </ion-select>
                <ion-checkbox label-placement="end" justify="start">Demands immediate attention</ion-checkbox>
                <ion-select label="Cost Indication">
                    <ion-select-option value="0-500">€0 - €500</ion-select-option>
                    <ion-select-option value="500-1500">€500 - €1.500</ion-select-option>
                    <ion-select-option value="1500+">€1.500+</ion-select-option>
                </ion-select>
                <ion-textarea :auto-grow="true" v-model="individualJobDetail.notes" label="Notes"></ion-textarea>
                <AddImageToReport />
                <ion-button type="submit">Complete Report</ion-button>
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

    ion-button {
        margin-top: 3rem;
    }

    ion-textarea {
        min-height: 120px;
    }

    input {
        margin-bottom: 1rem;
    }

    ion-text {
        margin-top: 1rem;
        text-decoration: underline;
        font-size: 1.2rem;
    }
</style>
<script setup lang="ts">
    import { 
        IonInput,
        IonList,
        IonCheckbox,
        IonSelect,
        IonTextarea,
        IonTitle,
        IonButton, 
    } from '@ionic/vue';
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const jobId = ref(route.params.jobId);

    import { getIndividualScheduledJob } from '@/api/getScheduledJobs';
    import { baseScheduledJob } from '@/types/scheduledJob';
    import LoadingScreen from '@/components/LoadingScreen.vue';
    import AddImageToReport from './AddImageToReport.vue';

    const capturedImage = ref<string | null>(null);

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