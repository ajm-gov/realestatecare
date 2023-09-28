<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title size="small"><img width="180" src="@/assets/logos/logo_horizontal.svg" alt="Real Estate Care Logo Horizontal"></ion-title>
        <ion-buttons color="primary" slot="secondary">
          <ion-button color="primary">
            <ion-icon color="primary" slot="icon-only" :icon="notificationsOutline"></ion-icon>
          </ion-button>
          <ion-button>
            <ion-icon slot="icon-only" :icon="settingsSharp"></ion-icon>
          </ion-button>
         </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <slot></slot>
    <BottomTabs />
  </ion-page>
</template>

<script setup lang="ts">
    import {
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonButton,
        IonIcon,
        IonPage,
    } from "@ionic/vue";

    import {
        settingsSharp,
        notificationsOutline,
    } from "ionicons/icons"

  import BottomTabs from "./BottomTabs.vue";

</script>