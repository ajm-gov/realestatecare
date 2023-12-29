<template>
    <ion-row class="loginPadding loginContainer">
        <ion-row>
            <img width="280" src="@/assets/logos/logo_horizontal.svg" alt="Real Estate Care Logo Horizontal">
        </ion-row>
            <form @submit.prevent="loginUser">
                <ion-input
                    v-model="email"
                    name="email"
                    ref="input"
                    type="email"
                    fill="solid"
                    label="Email"
                    label-placement="floating"
                    error-text="Invalid Email, try again"
                />
                <ion-input 
                    v-model="password"
                    name="password"
                    ref="input"
                    type="password"
                    fill="solid"
                    label="Password"
                    label-placement="floating"
                />
                <ion-input 
                    v-model="authCode"
                    name="authCode"
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
        width: 95%;
    }
</style>

<script setup lang="ts">
import { ref } from "vue";
import { authenticateUser } from "@/utils/authUser"
import { loginStatusStore } from "@/stores/loginStatus"
import router from "@/router"

import { 
  IonIcon, 
  IonRow,
  IonInput,
  IonButton,
  IonAlert,
  IonActionSheet,
  toastController
} from '@ionic/vue';

import { 
  logInOutline,
  helpBuoyOutline,
} from 'ionicons/icons';

let email = ref('');
let password = ref('');
let authCode = ref('');

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

const loginUser = async () => {
    console.log(email, password, authCode)
    await authenticateUser(email.value, password.value, authCode.value); 

    if (loginStatusStore().loggedIn) {
        console.log("Succesful login!");
        router.push("/home")
    } else {
        const errorToast = await toastController.create({
            message: "Login failed! Please try again with correct credentials",
            duration: 5000,
            position: "middle",
        });

        await errorToast.present();
    }
}

</script>