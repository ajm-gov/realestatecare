<template>
    <ion-modal ref="modal" trigger="change-password">
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-button @click="cancelPasswordChange()">Cancel</ion-button>
                </ion-buttons>
                <ion-title>Change Password</ion-title>
                <ion-buttons slot="end">
                    <ion-button @click="validatePasswordChange()">Save</ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-label>Change your user password</ion-label>
            <form>
                <ion-input 
                        v-model="passwordInitial"
                        name="passwordInitial"
                        ref="input"
                        type="password"
                        fill="solid"
                        label="New Password"
                        label-placement="floating"
                />
                <ion-input 
                        v-model="passwordRepeat"
                        name="passwordRepeat"
                        ref="input"
                        type="password"
                        fill="solid"
                        label="Repeat Password"
                        label-placement="floating"
                />
            </form>
        </ion-content>
    </ion-modal>
</template>

<style scoped>
    ion-title {
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-top: 2rem;
    }
</style>

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
        IonPopover,
        IonContent,
        IonModal,
        IonHeader,
        IonToolbar,
        IonButtons,
        modalController,
        IonInput,
        toastController
    } from '@ionic/vue';

    import { ref } from 'vue';

    const modal = ref();

    let passwordInitial = ref('');
    let passwordRepeat = ref('');



    const cancelPasswordChange = () => modalController.dismiss(null, 'cancel');

    const validatePasswordChange = async () => {

        if (passwordInitial.value === "") {
            const emptyToast = await toastController.create({
                message: 'Please make sure to fill in a value before saving',
                duration: 3000,
                position: 'top'
            });

            emptyToast.present();
        } else {


            if (passwordInitial.value === passwordRepeat.value) {
            const successToast = await toastController.create({
                message: 'Password change successful!',
                duration: 3000,
                postiion: 'top'
            });

            await successToast.present();
            console.log("Password change succesful!");
            modalController.dismiss(null, 'cancel');
            } else {
                const failToast = await toastController.create({
                    message: 'Password did not change. Please check both input fields have the exact same value',
                    duration: 4000,
                    position: 'top'
                });

                await failToast.present();
                console.log("Password change failed!")
            }
        }


    }
</script>