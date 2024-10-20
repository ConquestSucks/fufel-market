import { makeAutoObservable, action } from "mobx";
import User from "../types/user";

class AuthStore {
    isAuthenticated: boolean = false;
    userToken: string | null = null;
    currentUser: User | null = null;
    authForm: boolean = false;

    constructor() {
        makeAutoObservable(this, {
            toggleAuth: action
        })
    }

    login(user: User) {
        this.isAuthenticated = true;
        this.currentUser = user;
    }

    logout() {
        this.isAuthenticated = false;
        this.currentUser = null;
    }

    get getUserData() {
        return this.currentUser;
    }

    toggleAuth() {
        this.authForm = !this.authForm
    }

}

export const authStore = new AuthStore()