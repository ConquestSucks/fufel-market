'use client'
import { useEffect } from "react"
import AdCard from "../components/ui/AdCard"
import { adStore } from "../store/ad.store"
import { observer } from "mobx-react-lite";

const AdsPage = observer(() => {
    useEffect(() => {
        adStore.loadAds();
    }, []);
    const adsList = adStore.ads.map((ad) => 
        (
            <AdCard key={ad.id} ad={ad}/>
        ))
    return (
        <div className="flex justify-center items-start min-h-screen p-2">
            <div className="flex flex-wrap  w-10/12 gap-5">
                {adsList}
            </div>
        </div>
    )
})

export default AdsPage;