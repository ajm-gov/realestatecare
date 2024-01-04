<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
          <ion-title router-link="/" size="small"><img width="200" src="@/assets/logos/logo_horizontal.svg" alt="Real Estate Care Logo Horizontal"></ion-title>
        <ion-buttons color="primary" slot="secondary">
          <ion-button color="primary" id="notification-box" aria-label="Button to get Notifications pop-up">
            <ion-icon color="primary" slot="icon-only" :icon="notificationsOutline"></ion-icon>
          </ion-button>
          <ion-popover side="bottom" alignment="start" trigger="notification-box">
            <ion-content class="ion-padding container">
              <ion-list>
                <ion-item>
                  <ion-icon aria-hidden="true" :icon="calendarClearOutline" slot="start"></ion-icon>
                  <ion-label>4 upcoming jobs</ion-label>
                </ion-item>
                <ion-item>
                  <ion-icon aria-hidden="true" :icon="chatboxEllipsesOutline" slot="start"></ion-icon>
                  <ion-label>1 new message</ion-label>
                </ion-item>
              </ion-list> 
            </ion-content>
          </ion-popover>
          <ion-button router-link="/settings" aria-label="Button to navigate to settings">
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

<style scoped>
/* ion-content {
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
    } */

 
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
        IonPopover,
        IonText,
        IonList,
        IonItem,
        IonLabel
    } from "@ionic/vue";

    import {
        settingsSharp,
        notificationsOutline,
        calendarClearOutline,
        chatboxEllipsesOutline
    } from "ionicons/icons"


</script>