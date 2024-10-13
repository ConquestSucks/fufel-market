import { makeAutoObservable } from "mobx";
import AdCard from "../types/adCard";

class AdStore {
    ads: Array<AdCard>;
    constructor() {
        this.ads = [
            new AdCard(0, 'Колеса', 'R15', 's', 1000, 'Екатеринбург'),
            new AdCard(1, 'Колеса', 'R15', 's', 1000, 'Екатеринбург'),
            new AdCard(2, 'Колеса', 'R15', 's', 1000, 'Екатеринбург'),
            new AdCard(3, 'Колеса', 'R15', 's', 1000, 'Екатеринбург'),
            new AdCard(4, 'Колеса', 'R15', 's', 1000, 'Екатеринбург'),
            new AdCard(5, 'Колеса', 'R15', 's', 1000, 'Екатеринбург'),
            new AdCard(6, 'Колеса', 'R15', 's', 1000, 'Екатеринбург'),
            new AdCard(7, 'Колеса', 'R15', 's', 1000, 'Екатеринбург'),
            new AdCard(8, 'Колеса', 'R15', 's', 1000, 'Екатеринбург'),
        ]
        makeAutoObservable(this)
    }

    getAdById(id: number) {
        return this.ads.find((ad) => ad.id === id) || null;
    }
}

export const adStore = new AdStore()