import AdCard from "./adCard";

export default class User {
    id: number;
    admin: boolean = false;
    name: string;
    phone: string;
    ads: Array<AdCard>;

    constructor(id: number, name: string, phone: string, ads: Array<AdCard>) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.ads = ads;
    }
}