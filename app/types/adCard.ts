import User from "./user";

export default class AdCard {
    id: number;
    name: string;
    description: string;
    views: number;
    image?: string;
    price: number;
    city: string;
    category: string;
    user: User;


    constructor(id: number, name: string, description: string, views: number, image: string, price: number, city: string, category: string, user: User) {
        this.id = id
        this.name = name
        this.description = description
        this.views = views
        this.price = price
        this.city = city
        this.category = category
        this.user = user
    }
}