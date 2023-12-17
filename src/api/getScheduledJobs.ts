import axios from "axios";
import { JSON_DB_BASE_URL } from '@/utils/constants';

export const getScheduledJobs = async () => {
    const scheduledJobsUrl = `${JSON_DB_BASE_URL}/scheduled`;

    try {
        const response = await axios.get(scheduledJobsUrl);
        return response.data
    } catch (error) {
        console.error('Error fetching scheduled jobs: ', error);
        throw error;
    }
}