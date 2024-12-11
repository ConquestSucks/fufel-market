import { makeAutoObservable } from "mobx";
import User from "../interfaces/user";
import axios from "axios";

class AuthStore {
    userToken: string | null = null;
    currentUser: User | null = null;
    isCodeSent: boolean = false;
    url: string = 'http://localhost:5218/api'
    isModalOpen: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    openModal() {
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
    }

    toggleModal() {
        this.isModalOpen = !this.isModalOpen;
    }

    sendVerificationCode = async (email: string) => {
        try {
            await axios.post(`${this.url}/mail/sendVerificationCode/${email}`, email)
            this.isCodeSent = true
        }
        catch(error) {
            console.error("error by sending code");
            throw error
        }
    }
    
    login = async () => {

    }

    logout() {
        this.currentUser = null;
    }

    get getUserData() {
        return this.currentUser;
    }


}

export const authStore = new AuthStore()