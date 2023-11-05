import { defineStore } from "pinia";
import { userInterface } from "@/types/stateManagement";

export const loginStatusStore = defineStore('loginStatus', {
    state: () => {
        return {
            loggedIn: false,
            name: undefined,
        }
    },
    actions: {
        loginUser() {
            this.loggedIn = true
        },
        logoutUser() {
            this.loggedIn = false
        }
    }
})