<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
          <ion-title router-link="/" size="small"><img width="180" src="@/assets/logos/logo_horizontal.svg" alt="Real Estate Care Logo Horizontal"></ion-title>
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
    <ion-content>
      <slot></slot>
    </ion-content>
  </ion-page>
</template>

<style>
ion-content {
    –offset-bottom: auto !important;
    –overflow: auto;
    background: var(–ion-toolbar-background, var(–ion-background-color, #f4f5f8)) !important;
    overflow: auto;
    
    &::-webkit-scrollbar {
    width: 15px;
    height: 15px;
    }
    
    &::-webkit-scrollbar-track {
    background: #fff;
    }
    
    &::-webkit-scrollbar-track:hover {
    background: #f7f7f7;
    }
    
    &::-webkit-scrollbar-thumb {
    background: #ccc;
    }
    
    &::-webkit-scrollbar-thumb:hover {
    background: #94173a
    }
    
    .inner-scroll {
    scrollbar-width: thin;
    }
    }
</style>

<script setup lang="ts">
    import {
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonButton,
        IonIcon,
        IonPage,
        IonContent,
    } from "@ionic/vue";

    import {
        settingsSharp,
        notificationsOutline,
    } from "ionicons/icons"

  import BottomTabs from "./BottomTabs.vue";

</script>