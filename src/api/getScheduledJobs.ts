import axios from "axios";
import { JSON_DB_BASE_URL } from '@/utils/constants';

const scheduledJobsUrl = `${JSON_DB_BASE_URL}/scheduled`;

export const getScheduledJobs = async () => {

    try {
        const response = await axios.get(scheduledJobsUrl);
        return response.data
    } catch (error) {
        console.error('Error fetching scheduled jobs: ', error);
        throw error;
    }
}

export const  getIndividualScheduledJob = async (jobId: number) => {
    try {
        const response = await axios.get(`${scheduledJobsUrl}/${jobId}`)
        return response.data
    } catch (error) {
        console.error(`Error fetching scheduled job with id ${jobId}`, error);
        throw error;
    }
}