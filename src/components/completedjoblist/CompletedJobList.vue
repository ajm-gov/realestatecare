<template>
    <ion-grid :fixed="true">
        <ion-row><ion-col>
            <ion-text>
                <h1>Completed Jobs</h1>
            </ion-text>
            <ion-accordion-group>
                <ion-accordion v-for="item in completedJobs" :key="item.id">
                    <ion-item slot="header">
                        <ion-label>{{ item.clientName }}, {{  readableDate(item.date) }}</ion-label>
                    </ion-item>
                        <div class="ion-padding" slot="content">
                            <ion-row class="smallGap marginBottomSmall">
                                <ion-icon :icon="navigateCircleOutline"></ion-icon>
                                <ion-label>{{ item.location }}</ion-label>
                            </ion-row>
                            <ion-row class="smallGap marginBottomSmall">
                                <ion-icon :icon="constructOutline" ></ion-icon>
                                <ion-label>{{ jobSpecification(item.jobSpecification) }}</ion-label>
                            </ion-row>
                            <ion-row>
                                <ion-text class="underline"><h5>Notes</h5></ion-text>
                                <ion-text class="marginBottomSmall">{{ item.notes }}</ion-text>
                            </ion-row>
                   
                             <ion-accordion-group>
                                    <ion-accordion>
                                        <ion-item slot="header" class="secondaryAccordion" color="primary">
                                            <ion-label>Job details</ion-label>
                                        </ion-item>
                                        <div class="contentPadding" slot="content">
                                            <ion-row><ion-text v-if="item.jobDetails.modificationDetails">Modification details: {{ item.jobDetails.modificationDetails }}</ion-text></ion-row>
                                            <ion-row><ion-text v-if="item.jobDetails.modifiedBy">Modification by: {{ item.jobDetails.modifiedBy }}</ion-text></ion-row>
                                            <ion-row><ion-text v-if="item.jobDetails.documentedModifications">Link to documented modifications: {{ item.jobDetails.documentedModifications }}</ion-text></ion-row>
                                            <ion-row><ion-text v-if="item.jobDetails.nextAction">Next action: {{ item.jobDetails.nextAction }}</ion-text></ion-row>
                                            <ion-row><ion-text v-if="item.jobDetails.newDamage">Is damage new?: {{ booleanYesOrNo(item.jobDetails.newDamage) }}</ion-text></ion-row>
                                            <ion-row><ion-text v-if="item.jobDetails.typeDamage">Damage type: {{ item.jobDetails.typeDamage }}</ion-text></ion-row>
                                            <ion-row><ion-text v-if="item.jobDetails.directActionRequired">Direct action required?: {{ booleanYesOrNo(item.jobDetails.directActionRequired) }}</ion-text></ion-row>
                                            <ion-row><ion-text v-if="item.jobDetails.typeMaintenance">Maintenance type: {{ item.jobDetails.typeMaintenance }}</ion-text></ion-row>
                                            <ion-row><ion-text v-if="item.jobDetails.costIndication">Cost indication: {{ item.jobDetails.costIndication }}</ion-text></ion-row>
                                            <ion-row><ion-text v-if="item.jobDetails.typeInstallation">Installation type: {{ item.jobDetails.typeInstallation }}</ion-text></ion-row>
                                            <ion-row><ion-text v-if="item.jobDetails.reportedDefect">Reported defect: {{ item.jobDetails.reportedDefect }}</ion-text></ion-row>
                                            <ion-row><ion-text v-if="item.jobDetails.testingProcedure">Testing procedure: {{ item.jobDetails.testingProcedure }}</ion-text></ion-row>
                                            <ion-row><ion-text v-if="item.jobDetails.approved">Approved?: {{ booleanYesOrNo(item.jobDetails.approved) }}</ion-text></ion-row>


                                        
                                        </div>
                                    </ion-accordion>
                                </ion-accordion-group>


                        </div>
                </ion-accordion>
            </ion-accordion-group>
        </ion-col>                
        </ion-row>
    </ion-grid>
</template>

<style scoped>
    ion-item[slot='header'] {
        background-color: white;
        border-bottom: 2px solid var(--ion-color-primary);
        font-size: 1.1rem;
        padding: 0;
    }

    ion-item[slot='header'].secondaryAccordion {
        border-radius: 50px;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
</style>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { 
        IonList,
        IonListHeader,
        IonLabel,
        IonItem,
        IonRow,
        IonCol,
        IonGrid,
        IonIcon,
        IonAccordion,
        IonAccordionGroup,
        IonText
    } from '@ionic/vue';
    import { navigateCircleOutline, constructOutline } from 'ionicons/icons';

    import { getCompletedJobs, getCompletedJobDetails } from '@/api/getCompletedJobs';
    import { completedJob } from '@/types/completedjob'
    import { RouterLink } from 'vue-router';
    import {readableDate} from '@/utils/readDate';
    import { jobSpecification, booleanYesOrNo } from '@/utils/transformMessage';

    const completedJobs = ref<completedJob[]>([]);

    onMounted(async () => {
        try {
            const response = await getCompletedJobs();
            const individualResponse = await getCompletedJobDetails(1);
            const individualResponseString = JSON.stringify(individualResponse);
            console.log(`Individual Response for job 1: ${individualResponseString}`);
            // Sort data by date
            response.sort((a: completedJob, b: completedJob) => {
                const dateA = new Date(a.date) as any;
                const dateB = new Date(b.date) as any;
                return dateB - dateA;
            });
            completedJobs.value = response;
        } catch (error) {
            console.error('Error fetching Completed Jobs:', error);
        }
    });

</script>