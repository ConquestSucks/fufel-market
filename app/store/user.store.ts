import { makeAutoObservable } from "mobx";
import User from "../types/user";

class UserStore {
    users: Array<User>;

    constructor() {
        this.users =[
            new User(0, 'eshkere', '21312', [])
        ]
        makeAutoObservable(this)
    }

    getUserByID(id: number) {
        return this.users.find((user) => user.id == id)
    }
}

export const userStore = new UserStore()