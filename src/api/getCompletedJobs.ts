import axios from 'axios';
import { JSON_DB_BASE_URL } from '@/utils/constants';

const completedJobsUrl = `${JSON_DB_BASE_URL}/jobs/`;

export const getCompletedJobs = async () => {

    try {
        const response = await axios.get(completedJobsUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching completed jobs:', error);
        throw error;
    }
};

export const getCompletedJobDetails = async (id: number) => {
    const completedJobsDetailUrl = `${completedJobsUrl}${id}`; 

    try {
        const response = await axios.get(completedJobsDetailUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching job details:', error);
        throw error;
    }
}
