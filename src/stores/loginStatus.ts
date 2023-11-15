import { defineStore } from "pinia";
import { userInterface } from "@/types/user";

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