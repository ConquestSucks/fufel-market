import AdCard from "./adCard";

export default class User {
    id: number;
    admin: boolean = false;
    name: string;
    email: string;
    role: string;
    phone: string;
    ads: AdCard[];
    reviews: [];
    writtenFeedbacks: []

    constructor(id: number, role: string, name: string, email: string, phone: string) {
        this.id = id;
        this.role = role;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.ads = [];
        this.reviews = [];
        this.writtenFeedbacks = [];
    }
}