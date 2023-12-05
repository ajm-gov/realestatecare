<template>
    <ion-list>
        <ion-item>
            <ion-avatar slot="start">
                <img src="@/assets/img/fred.jpeg" width="">
            </ion-avatar>
            <ion-label>
                {{ userName() }}
            </ion-label>
        </ion-item>
        <ion-item>
                <ion-select label="Notifications" placeholder="Notify always">
                <ion-select-option value="apple">Personal Notifications only</ion-select-option>
                <ion-select-option value="banana">All Notifications</ion-select-option>
                <ion-select-option value="orange">Notifications turned off</ion-select-option>
            </ion-select>
        </ion-item>
        <ion-item>
                <ion-select label="Inspection Reminders" placeholder="10 minutes before">
                <ion-select-option value="apple">10 minutes before occassion</ion-select-option>
                <ion-select-option value="banana">30 minutes before occassion</ion-select-option>
                <ion-select-option value="orange">1 hour before occasion</ion-select-option>
            </ion-select>
        </ion-item>
    </ion-list>
</template>

<script setup lang="ts">
import {
    IonSelect,
    IonSelectOption,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel
} from '@ionic/vue';

import { userDetailsStore } from '@/stores/userDetails';

const store = userDetailsStore();

const userName = () => {
    if (store.firstName !== "") {
        return store.firstName
    } else {
        return "User"
    }
}

</script>