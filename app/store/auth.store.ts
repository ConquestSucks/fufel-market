import { makeAutoObservable, action } from "mobx";

class AuthStore {
    auth: boolean = false

    constructor() {
        makeAutoObservable(this, {
            toggleAuth: action
        })
    }

    toggleAuth() {
        this.auth = !this.auth
    }

}

export const authStore = new AuthStore()