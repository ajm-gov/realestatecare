<template>
    <ion-list>
        <ion-item>
            <ion-avatar slot="start">
                <img src="@/assets/img/fred.jpeg" width="" alt="User Profile Picture">
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
        <ion-item>
            <ion-checkbox justify="space-between">Mute Notifications outside working hours</ion-checkbox>
        </ion-item>
        <ion-item id="change-password" expand="block">
            <ion-icon slot="end" :icon="arrowForwardOutline"></ion-icon>
            <ion-label>Change Password</ion-label>
        </ion-item>
        <ChangePassword />
        <ion-button expand="full" @click="() => logOutUser()">Log Out Current User</ion-button>
    </ion-list>

</template>

<script setup lang="ts">
import {
    IonSelect,
    IonSelectOption,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonButton,
    IonCheckbox,
} from '@ionic/vue';

import { 
  arrowForwardOutline,
} from 'ionicons/icons';

import ChangePassword from './parts/ChangePassword.vue';
import { userDetailsStore } from '@/stores/userDetails';
import { loginStatusStore } from '@/stores/loginStatus';
import router from '@/router';


const userStore = userDetailsStore();
const loginStore = loginStatusStore();

const userName = () => {
    if (userStore.firstName !== "" && userStore.lastName !== "") {
        return `${userStore.firstName} ${userStore.lastName}`
    } else {
        return "User"
    }
}

const logOutUser = () => {
    loginStore.logoutUser();
    router.push({
        name: 'loginScreen'
    });
}

</script>