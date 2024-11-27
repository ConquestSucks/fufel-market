import { makeAutoObservable } from "mobx";
import User from "../types/user";
import axios from "axios";


class UserStore {
    user: User | null = null
    url: string = ""

    constructor() {
        makeAutoObservable(this)
    }

    

    async getUser(id: number) {
        try {
            const response = (await axios.get(`http://localhost:7151/api/user/${id}`)).data;
            console.log(response)
            return response

        } catch (error) {
            console.error("error by fetchting user id");
            throw error
        }
    }
    
}

export const userStore = new UserStore()