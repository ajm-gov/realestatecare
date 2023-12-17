<template>
    <form>
        <ion-list>
                <ion-input label-placement="stacked" fill="outline" label="Company Name" />
                <ion-input label-placement="stacked" fill="outline" label="City" />
                <ion-input label-placement="stacked" fill="outline" label="Postal Code" />
                <ion-input label-placement="stacked" fill="outline" label="Province" />
                <ion-input label-placement="stacked" fill="outline" label="Housenumber" />
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
                <ion-textarea label="Notes"></ion-textarea>
        </ion-list>
    </form>
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
        IonItem,
        IonCheckbox,
        IonSelect,
        IonDatetime,
        IonTextarea
    } from '@ionic/vue';
</script>