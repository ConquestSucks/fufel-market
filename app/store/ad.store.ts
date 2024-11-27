import { makeAutoObservable } from "mobx";
import AdCard from "../types/adCard";
import axios from "axios";

class AdStore {
    ads: Array<AdCard>;
    ad: AdCard | null
    loading: boolean = false;
    url: string = ""
    
    constructor() {
        this.ads = []
        this.ad = null
        makeAutoObservable(this)
    }

    async loadAds() {
        this.loading = true

    
            
    }

    async loadAdById(id: number) {

    }
}

export const adStore = new AdStore()