export interface baseScheduledJob {
    id: number,
    company: string,
    city: string,
    postal_code: string,
    province: string,
    housenumber: number,
    additions: string,
    street: string,
    notes: string
}

export interface scheduledJob extends baseScheduledJob {
    date_created: string,
    date_to_complete: string,
    jobSpecification: string,
}