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
                    error-text="Invalid Email, try again"
                />
                <ion-input 
                    ref="input"
                    type="password"
                    fill="solid"
                    label="Password"
                    label-placement="floating"
                />
                <ion-input 
                    ref="input"
                    type="number"
                    fill="solid"
                    :label="authMethod === 'googleAuth' ? 'Google Auth Code' : 'Text Message Code'"
                    label-placement="floating"
                />
                <ion-button                     
                    color="light"
                    id="open-action-sheet" 
                    type="button"
                >
                    Authentication method
                </ion-button>
                <ion-button
                    expand="block"
                    type="submit"
                >
                    <ion-icon slot="start" :icon="logInOutline"></ion-icon>
                    Login
                </ion-button>
                <ion-action-sheet 
                    trigger="open-action-sheet" 
                    header="Choose Authentication Method" 
                    :buttons="actionSheetButtons"
                    @didDismiss="setAuthenticationMethod($event)"
                >
                </ion-action-sheet>
                <ion-alert 
                    trigger="present-alert"
                    header="Please enter your authentication from your 2 factor authentication app!"
                    :buttons="alertButtons"
                    :inputs="alertInputs"
                >
                </ion-alert>
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
  IonAlert,
  actionSheetController,
  IonActionSheet
} from '@ionic/vue';

import { 
  logInOutline,
  helpBuoyOutline,
compassSharp
} from 'ionicons/icons';

const alertButtons = [{
    type: 'submit',
    role: 'authenticate',
    text: 'Login',
    handler: () => {
        console.log(twoFactorCode.value)
    }
}];

const alertInputs = [
    {
       type: 'number',
       placeHolder: '2FA Code',
       max: 6,
    }
]

const twoFactorCode = ref("");
const showAlert = ref(false);

const showTwoFactorAuth = () => {
    showAlert.value = true
}

const actionSheetButtons = [
    {
        text: 'Google Authenticator App',
        role: 'Google Auth App',
        data: {
            action: 'googleAuthApp'
        }
    },
    {
        text: 'Authentication Code by Text',
        role: 'Text Message Auth',
        data: {
            action: 'textMessageAuth'
        }
    },
    {
        text: "Cancel",
        role: 'cancel',
        data: {
            action: 'cancel'
        }
    }
]

let authMethod = ref("googleAuth")

const setAuthenticationMethod = (ev: CustomEvent) => {
    const authMethodResponse = ev.detail.data.action;

    if (authMethodResponse === 'googleAuthApp') {
        authMethod.value = "googleAuth"
    } else if (authMethodResponse === 'textMessageAuth') {
        authMethod.value = "textAuth"
    }
}

const testClick = () => {
    console.log("button clicked")
}

// const logAuthResult = (ev: CustomEvent) => {
//     console.log(JSON.stringify(ev.detail.data.action, null, 2));
// };

</script>