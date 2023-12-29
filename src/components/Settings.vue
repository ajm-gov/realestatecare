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
    IonButton
} from '@ionic/vue';

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