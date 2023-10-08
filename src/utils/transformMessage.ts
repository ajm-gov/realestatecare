export const jobSpecification = (jobSpecification: string) => {
    let jobType: string;
    switch(jobSpecification) {
        case 'damage':
            jobType = "Damage report"
            break;
        case 'maintenance':
            jobType = "Maintenance report"
            break;
        case 'inspection':
            jobType = "Technical inspection"
            break;
        case 'modification':
            jobType = "Modified property"
            break;
        default:
            jobType = "No job type specified"
    }
    return jobType;
}

export const booleanYesOrNo = (booleanValue: boolean) => {
    if (booleanValue === true) {
        return "Yes"
    } 
    return "No"
}