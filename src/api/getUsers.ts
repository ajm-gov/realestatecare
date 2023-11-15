import axios from 'axios';

// THIS IS NOT A RECOMMENDED METHOD FOR GETTING USERS IN AN APPLICATION
// THIS IS NOT SECURE AT ALL, DEMO PURPOSE ONLY!

export const getAllUsers = async () => {
    const getUsersUrl = "https://my-json-server.typicode.com/ajm-gov/realestatecare/users/"

    try {
        const response = await axios.get(getUsersUrl);
        return response.data
    } catch (error) {
        console.error(`Error fetching users from DB:`, error);
        throw error
    }
}