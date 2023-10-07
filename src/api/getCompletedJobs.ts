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
