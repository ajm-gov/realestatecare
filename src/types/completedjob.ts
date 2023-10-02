export interface completedJob {
    id: number;
    date: string;
    clientName: string;
    jobSpecification: string;
    location: string;
    notes: string;
    jobDetails: modificationDetails | damageDetails | maintenanceDetails | inspectionDetails;
}

export interface modificationDetails {
    documentedModifications: string,
    modifiedBy: string,
    modificationDetails: string,
    nextAction: string,
}

export interface damageDetails {
    newDamage: boolean,
    typeDamage: string,
    directActionRequired: boolean,
}

export interface maintenanceDetails {
    typeMaintenance: string,
    directActionRequired: boolean,
    costIndication: string,
}

export interface inspectionDetails {
    typeInstallation: string,
    reportedDefect: string,
    testingProcedure: string,
    approved: boolean,
}
