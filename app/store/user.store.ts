import { makeAutoObservable } from "mobx";
import User from "../types/user";
//import axios from "axios";


class UserStore {
    user: User | null = null
    url: string = 'http://localhost:7151/api'

    constructor() {
        makeAutoObservable(this)
    }

/*     async getUser(id: number) {
        try {
            const response = (await axios.get(`${this.url}/user/${id}`)).data;
            console.log(response)
            return response

        } catch (error) {
            console.error("error by fetchting user id");
            throw error
        }
    } */
    
}

export const userStore = new UserStore()