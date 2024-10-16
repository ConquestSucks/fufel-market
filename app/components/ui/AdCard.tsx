import Image from "next/image"
import { openSans } from '@/app/ui/fonts';
import Link from "next/link";
import AdCardClass from "@/app/types/adCard";

const AdCard = ({ ad } : { ad: AdCardClass }) => {
    return (
        <Link href={`/ads/${ad.id}`}
            className={`${openSans.className} p-5 flex flex-col justify-center items-center gap-1.5 bg-background rounded-xl text-black h-fit
               transition-all duration-300 hover:shadow-lg
            `}
        >
            <Image
            src="/logo-black.svg"
            width={250}
            height={250}
            className="rounded"
            alt=""
            />
            <div className="flex flex-col gap-0.5">
                <span className="text-3xl font-black">{ad.name}</span>
                <span className="text-2xl font-bold">{ad.price} ₽</span>
                <span className="text-xl">{ad.city}</span>
            </div>
        </Link>
    ) 
}

export default AdCard;