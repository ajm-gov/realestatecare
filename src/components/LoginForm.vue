<template>
    <ion-row class="loginPadding loginContainer">
        <ion-row>
            <img width="280" src="@/assets/logos/logo_horizontal.svg" alt="Real Estate Care Logo Horizontal">
        </ion-row>
            <form method="POST">
                <ion-input
                    ref="input"
                    type="email"
                    fill="solid"
                    label="Email"
                    label-placement="floating"
                    helper-text="Enter a valid Email Address!"
                    error-text="Invalid Email, try again"
                />
                <ion-input 
                    ref="input"
                    type="password"
                    fill="solid"
                    label="Password"
                    label-placement="floating"
                />
                <ion-button     
                    type="submit" 
                    expand="block"
                >
                    <ion-icon slot="start" :icon="logInOutline"></ion-icon>
                    Login
                </ion-button>
            </form>
        <ion-row>
            <a link="#" class="footerLogin">
                <ion-icon slot="start" :icon="helpBuoyOutline"></ion-icon>
                <span>Need help?</span>
            </a>
        </ion-row>
    </ion-row>


</template>

<style scoped>
    form {
        width: 90vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    ion-row {
        justify-content: center;
    }

    ion-row.loginContainer {
        gap: 5rem;
    }

    a.footerLogin {
        display: flex;
        gap: 5px;
        align-items: stretch;
    }


    ion-input, ion-button {
        width: 80%;
    }
</style>

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
  IonInput,
  IonButton,
} from '@ionic/vue';

import { 
  logInOutline,
  helpBuoyOutline
} from 'ionicons/icons';



</script>