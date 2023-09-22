<template>
    <Layout>
            <ion-content>
                <ion-card class="headerCard">
                    <ion-card-content color="light">
                        <ion-badge color="light">11</ion-badge>
                        <ion-label>Open tasks for you today</ion-label>
                        <ion-text color="light">Hello Fred</ion-text>
                    </ion-card-content>
                </ion-card>
                <ion-row>
                    <ion-col>
                        <ion-card>
                            <ion-card-content>
                                <ion-icon :icon="calendarNumberOutline"></ion-icon>
                                <ion-card-subtitle>Scheduled</ion-card-subtitle>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                    <ion-col>
                        <ion-card>
                            <ion-card-content>
                                <ion-icon :icon="shieldCheckmarkOutline"></ion-icon>
                                <ion-card-subtitle>Completed</ion-card-subtitle>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-card>
                            <ion-card-content>
                                <ion-icon :icon="settingsSharp"></ion-icon>
                                <ion-card-subtitle>Knowledge Base</ion-card-subtitle>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                    <ion-col>
                        <ion-card>
                             <ion-card-content>
                                <ion-icon :icon="informationCircleOutline"></ion-icon>
                                <ion-card-subtitle>Settings</ion-card-subtitle>
                            </ion-card-content>
                        </ion-card>
                    </ion-col>
                </ion-row>

            </ion-content>
    </Layout>
</template>

<style scoped>
    ion-card-content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1.5rem;
    }

    ion-icon {
        font-size: 80px;
    }

    ion-card.headerCard {
        background-color: #00aaa2;
    }
</style>

<script setup lang="ts">
import { 
    IonCard, 
    IonContent, 
    IonCardContent, 
    IonRow, 
    IonCol, 
    IonIcon, 
    IonCardSubtitle,
    IonText,
    IonBadge,
    IonLabel
} from '@ionic/vue';

import { 
    settingsSharp, 
    shieldCheckmarkOutline, 
    calendarNumberOutline, 
    informationCircleOutline 
} from 'ionicons/icons';
import Layout from '@/components/Layout.vue';
</script>