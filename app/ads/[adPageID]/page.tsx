import { adStore } from "@/app/store/ad.store";
import Image from "next/image";

export default function AdPage({ params }: { params: { adPageID: string } }) {
    const ad = adStore.getAdById(Number(params.adPageID));

    if (!ad) {
        return <div>Объявление не найдено</div>;
    }

    return (
        <div>
            <h1>{ad.name}</h1>
            <Image src={ad.image? ad.image: '/fufel-market-favicon-white.svg'} width={40} height={40} alt=""/>
            <p>Описание: {ad.description}</p>
            <p>Цена: {ad.price}</p>
            <p>Город: {ad.city}</p>
        </div>
    );
}
