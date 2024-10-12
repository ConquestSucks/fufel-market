export default class AdCard {
    id: number;
    name: string;
    description: string;
    image?: string;
    price: number;
    city: string;

    constructor(id: number, name: string, description: string, image: string, price: number, city: string) {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.city = city
    }
}