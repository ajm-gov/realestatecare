import { userInterface } from "@/types/user";
import { getAllUsers } from "@/api/getUsers";
import { loginStatusStore } from "@/stores/loginStatus";



export async function authenticateUser(email: string, password: string, authCode: string) {
    const existingUsers = await getAllUsers();

    // Check if the email someone is using exists in the 
    const user = existingUsers.find(
        (user: userInterface) =>
            user.email === email &&
            user.password === password && 
            user.authenticationCode === Number(authCode)
    );

    console.log('Authenticated User:', user)

    if (user) {
        loginStatusStore().loginUser()
    } else {
        console.error("Authentication failed!")
    }
}