<template>
    <ion-row>
        <ion-col>
            <ion-input
                ref="input"
                type="email"
                fill="solid"
                label="Email"
                label-placement="floating"
                helper-text="Enter a valid Email Address!"
                error-text="Invalid Email, try again"
                class="marginBottomMedium"
            />
            <ion-input 
                ref="input"
                type="password"
                fill="solid"
                label="Password"
                label-placement="floating"
            />
        </ion-col>
    </ion-row>


</template>


<script setup lang="ts">
import { defineComponent, ref } from "vue";

import { 
  IonTabBar, 
  IonTabButton, 
  IonTabs, 
  IonLabel, 
  IonIcon, 
  IonRouterOutlet,
  IonPage,
  IonRow,
  IonCol,
  IonInput
} from '@ionic/vue';

import { 
  shieldCheckmarkOutline, 
  calendarNumberOutline, 
  gridOutline
} from 'ionicons/icons';



</script>