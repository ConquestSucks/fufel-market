import Image from "next/image"
import { climateCrisis } from '@/app/ui/fonts';
import Link from "next/link";
import AdCardClass from "@/app/types/adCard";

const AdCard = ({ ad } : { ad: AdCardClass }) => {
    return (
        <Link href={`/ads/${ad.id}`}
            className={`${climateCrisis.className} p-5 flex flex-col justify-center items-center gap-1.5 bg-background rounded-lg w-40 text-black`}
        >
            <Image
            src="/logo-no-background.svg"
            width={100}
            height={100}
            className="rounded"
            alt=""
            />
            <div className="flex flex-col gap-0.5">
                <span className="text-xs text-accent">{ad.name}</span>
                <span className="text-xs text-accent">{ad.price}</span>
                <span className="text-xs text-accent">{ad.city}</span>
            </div>
        </Link>
    ) 
}

export default AdCard;