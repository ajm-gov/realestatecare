
<template>
    <Layout>
        <ExitComponent label="Back to Knowledgebase" routerLink="/knowledge-base" />
        <ion-title>Changing your password</ion-title>
        <div class="articlecontainer">
            <p>
                Changing your password for your Real Estate Care App, is an easy process. 
            </p>
            <h2>
                Navigate to your settings
            </h2>
            <p>
                In the header of your application, or on the homescreen, click on the settings button to navigate to your settings.
            </p>
            <figure>
                <img src="@/assets/img/knowledgebase/samplearticle/settingsheader.png" width="" alt="Image of the header of the application to indicate settings icon" />
                <figcaption>1. Indication of settings icon in the header of mobile application</figcaption>
            </figure>
            <figure>
                <img src="@/assets/img/knowledgebase/samplearticle/homepagesettings.png" width="" alt="Image of the homepage of the application to indicate settings icon" />
                <figcaption>2. Indication of settings icon on the homepage of mobile application</figcaption>
            </figure>
            <p>
                Clicking either of those will bring you to the settings menu. Once in the settings menu, click on "change password"
            </p>
            <figure>
                <img src="@/assets/img/knowledgebase/samplearticle/settingsmenu.png" width="" alt="Image of the settings menu, highlighting the change password section" />
                <figcaption>3. Overview of the settings menu</figcaption>
            </figure>
            <p>
                Once you click on the "change password" option, you will be presented with a new screen with an input form. The input form allows you to enter a new password.
            </p>
            <figure>
                <img src="@/assets/img/knowledgebase/samplearticle/changepassword.png" width="" alt="Image of the settings menu, highlighting the change password section" />
                <figcaption>4. Change Passwords Screen</figcaption>
            </figure>
            <p>
                In order to change your password, make sure for both fields, you type an identical password. Hit save and congratulations, you've got a new password!
            </p>
        </div>
    </Layout>
</template>

<style scoped>
    .articlecontainer {
        padding: 0 1rem;
    }

    figure {
        margin-bottom: 1rem;
    }
</style>

<script setup lang="ts">
    import { 
        IonTitle,
        IonImg
    } from "@ionic/vue";

    import Layout from "@/components/Layout.vue";
    import ExitComponent from "@/components/ExitComponent.vue";
</script>