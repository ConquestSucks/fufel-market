import Image from "next/image"
import { climateCrisis } from '@/app/ui/fonts';

export default function ProductCard() {
    return (
        <div className={`${climateCrisis.className} p-5 flex flex-col justify-center items-center gap-1.5 bg-background rounded-lg w-40 text-black`}>
            <Image
            src="/logo-no-background.svg"
            width={100}
            height={100}
            className="rounded"
            alt="blyaa tactor"
            />
            <div className="flex flex-col gap-0.5">
                <span className="text-xs text-accent">ProductName</span>
                <span className="text-xs text-accent">Price</span>
                <span className="text-xs text-accent">City</span>
            </div>
        </div>
    ) 
}