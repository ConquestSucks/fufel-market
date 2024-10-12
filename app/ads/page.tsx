import AdCard from "../components/ui/AdCard"
import { adStore } from "../store/ad.store"

export default function AdsPage() {
    const adsList = adStore.ads.map((ad) => 
    (
        <AdCard key={ad.id} ad={ad}/>
    ))
    return (
        <div className="flex justify-center">
            <div className="flex flex-wrap  w-10/12 gap-5">
                {adsList}
            </div>
        </div>
    )
}