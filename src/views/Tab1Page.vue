<template>
  <ion-page>
    <!-- <ion-header>
      <ion-toolbar>
        <img width="180" src="@/assets/logos/logo_horizontal.svg" alt="Real Estate Care Logo Horizontal">
      </ion-toolbar>
    </ion-header> -->
    <ion-content :fullscreen="true">
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header> -->

      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
</script>
