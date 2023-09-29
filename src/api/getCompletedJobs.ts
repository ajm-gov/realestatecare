import axios from 'axios';

export const getCompletedJobs = async () => {
    const completedJobsUrl = "http://localhost:3000/jobs"; // Replace later with .env file

    try {
        const response = await axios.get(completedJobsUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching completed jobs:', error);
        throw error;
    }
};
