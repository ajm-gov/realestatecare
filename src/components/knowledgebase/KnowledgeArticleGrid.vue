<template>
    <ion-grid>
        <ion-title>Knowledge Base</ion-title>
        <ion-row>
            <ion-col>
                <ion-card>
                    <ion-card-header>
                        <ion-card-title>Changing the settings</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <ion-label>Explanation of how to change your user settings</ion-label>
                    </ion-card-content>
                    <ion-button fill="clear" @click="router.push('/knowledge-base/changing-password')">Read Article</ion-button>
                </ion-card>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
                <ion-card>
                    <ion-card-header>
                        <ion-card-title>Filling out a Damange Report</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        Use the Real Estate Care App to fill out a damage report
                    </ion-card-content>
                    <ion-button fill="clear" @click="router.push('/knowledge-base/changing-password')">Read Article</ion-button>
                </ion-card>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
                <ion-card>
                    <ion-card-header>
                        <ion-card-title>Filling out a Maintenance Report</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        Use the Real Estate Care App to fill out a maintenance report
                    </ion-card-content>
                    <ion-button fill="clear" @click="router.push('/knowledge-base/changing-password')">Read Article</ion-button>
                </ion-card>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
                <ion-card>
                    <ion-card-header>
                        <ion-card-title>Changing your Password</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        Changing your Real Estate Care App Password
                    </ion-card-content>
                    <ion-button fill="clear" @click="router.push('/knowledge-base/changing-password')">Read Article</ion-button>
                </ion-card>
            </ion-col>
        </ion-row>
    </ion-grid>
    
</template>

<script setup lang="ts">
    import {
        IonCol,
        IonRow,
        IonGrid,
        IonCard,
        IonCardContent,
        IonCardHeader,
        IonTitle,
        IonCardTitle,
        IonLabel,
        IonButton
    } from "@ionic/vue"

    import router from "@/router"
</script>