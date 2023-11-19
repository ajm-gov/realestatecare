import { defineStore } from "pinia";

export const loginStatusStore = defineStore('loginStatus', {
    state: () => {
        return {
            loggedIn: false,
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