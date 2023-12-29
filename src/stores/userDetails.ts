import { defineStore } from "pinia";
import Cookies from "js-cookie";

export const userDetailsStore = defineStore('userDetails', {
    state: () => {
        return {
            firstName: '',
            lastName: '',
        }
    },
    actions: {
        setUserInfo(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
            Cookies.set('userFirstName', firstName);
            Cookies.set('userLastName', lastName);
        },
        clearUserInfo() {
            this.firstName = '';
            this.lastName = '';
        }
    }

})