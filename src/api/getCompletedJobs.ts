import axios from 'axios';
import { JSON_DB_BASE_URL } from '@/utils/constants';

export const getCompletedJobs = async () => {

    const completedJobsUrl = `${JSON_DB_BASE_URL}/jobs/`; // Replace later with .env file
    console.log(completedJobsUrl);
    try {
        const response = await axios.get(completedJobsUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching completed jobs:', error);
        throw error;
    }
};

export const getCompletedJobDetails = async (id: number) => {
    const completedJobsDetailUrl = `https://my-json-server.typicode.com/ajm-gov/realestatecare/jobs/${id}`; // replace later with .env file

    try {
        const response = await axios.get(completedJobsDetailUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching job details:', error);
        throw error;
    }
}
