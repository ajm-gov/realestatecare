<template>
  <ion-page>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab1" href="/jobs/scheduled">
            <ion-icon aria-hidden="true" :icon="calendarNumberOutline" />
            <ion-label>Scheduled Jobs</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="tab2" href="/jobs/completed">
            <ion-icon aria-hidden="true" :icon="shieldCheckmarkOutline" />
            <ion-label>Completed Jobs</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { 
    IonTabBar, 
    IonTabButton, 
    IonTabs, 
    IonLabel, 
    IonIcon, 
    IonRouterOutlet,
    IonPage
  } from '@ionic/vue';

  import { 
    shieldCheckmarkOutline, 
    calendarNumberOutline, 
} from 'ionicons/icons';
  </script>
  