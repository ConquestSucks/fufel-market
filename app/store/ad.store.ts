import { makeAutoObservable } from "mobx";
import AdCard from "../types/adCard";
import axios from "axios";

class AdStore {
    ads: Array<AdCard>;
    ad: AdCard | null
    loading: boolean = false;
    url: string = 'http://localhost:7151/api'
    
    constructor() {
        this.ads = []
        this.ad = null
        makeAutoObservable(this)
    }

    async loadAds() {
        this.loading = true
        try {
            const response = (await axios.get(`${this.url}/ad/`)).data
            console.log(`${this.url}/ads`)
            this.ads = response
            this.loading = false
        }
        catch(error) {
            console.error('error by fetching ads')
            this.loading = false
            throw error
        }
    }

    async loadAdById(id: number) {
        this.loading = true
        try {
            const adResponse = (await axios.get(`${this.url}/ad/${id}`)).data
            this.ad = adResponse
            const userResponse = (await axios.get(`${this.url}/user/${adResponse.userId}`)).data
            if (this.ad) {
                this.ad.user = userResponse
            }
            const reviwsResponse = (await axios.get(`${this.url}/feedback/${id}`)).data
            this.loading = false
        }
        catch(error) {
            console.error('error by fetching ad')
            this.loading = false
            throw error
        }
    }
}

export const adStore = new AdStore()