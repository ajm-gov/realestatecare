import { defineStore } from "pinia";
import Cookies from "js-cookie";

export const loginStatusStore = defineStore('loginStatus', {
    state: () => {
        return {
            loggedIn: false,
        }
    },
    actions: {
        loginUser() {
            this.loggedIn = true
            Cookies.set('authenticated-user', 'true', { expires: 7 })
        },
        logoutUser() {
            this.loggedIn = false
            Cookies.set('authenticated-user', 'false', { expires: 7 })
            Cookies.remove('userFirstName')
            Cookies.remove('userLastName')
        }
    }
})