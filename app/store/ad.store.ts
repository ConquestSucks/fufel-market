import { makeAutoObservable } from "mobx";
import AdCard from "../types/adCard";

class AdStore {
    ads: Array<AdCard>;
    constructor() {
        this.ads = [
            new AdCard(0, 'Колеса', 'R15', 's', 1000, 'Екатеринбург'),
            new AdCard(0, 'Колеса', 'R15', 's', 1000, 'Екатеринбург'),
            new AdCard(0, 'Колеса', 'R15', 's', 1000, 'Екатеринбург'),
            new AdCard(0, 'Колеса', 'R15', 's', 1000, 'Екатеринбург'),
            new AdCard(0, 'Колеса', 'R15', 's', 1000, 'Екатеринбург'),
            new AdCard(0, 'Колеса', 'R15', 's', 1000, 'Екатеринбург'),
            new AdCard(0, 'Колеса', 'R15', 's', 1000, 'Екатеринбург'),
            new AdCard(0, 'Колеса', 'R15', 's', 1000, 'Екатеринбург'),
            new AdCard(0, 'Колеса', 'R15', 's', 1000, 'Екатеринбург'),
        ]
        makeAutoObservable(this)
    }
}

export const adStore = new AdStore()