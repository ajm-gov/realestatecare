<template>
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
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-label>Tab 1</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon aria-hidden="true" :icon="ellipse" />
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
</template>

<script setup lang="ts">
    import {
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonButton,
        IonIcon,
        IonTabs,
        IonRouterOutlet,
        IonTabButton,
        IonTabBar,
        IonLabel
    } from "@ionic/vue";

    import {
        settingsSharp,
        notificationsOutline,
        triangle,
        ellipse,
        square
    } from "ionicons/icons"
</script>