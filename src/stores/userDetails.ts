import { defineStore } from "pinia";

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
        },
        clearUserInfo() {
            this.firstName = '';
            this.lastName = '';
        }
    }

})