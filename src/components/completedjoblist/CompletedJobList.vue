<template>
    <ion-list-header>
        <ion-accordion-group>
            <ion-accordion v-for="item in completedJobs" :key="item.id">
                <ion-item slot="header">
                    <ion-label>{{  item.date }}</ion-label>
                    <div class="ion-padding" slot="content">First Content</div>
                </ion-item>
            </ion-accordion>
        </ion-accordion-group>
    </ion-list-header>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { 
        IonAccordion,
        IonAccordionGroup,
        IonLabel,
        IonItem
    } from '@ionic/vue';
    import { getCompletedJobs } from '@/api/getCompletedJobs';
    import { CompletedJob } from './types'
    

    const completedJobs = ref<CompletedJob[]>([]);

    onMounted(async () => {
        try {
            completedJobs.value = await getCompletedJobs();
        } catch (error) {
            console.error('Error fetching Completed Jobs:', error);
        }
    });
</script>