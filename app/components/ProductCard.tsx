import Image from "next/image"
import { inter } from '@/app/ui/fonts';

export default function ProductCard() {
    return (
        <div className={`${inter.className} flex flex-col bg-red-50 rounded w-40 text-black`}>
            <Image
            src="/tractor.jpg"
            width={100}
            height={100}
            className="rounded"
            alt="blyaa tactor"
            />
            <span className="text-xs">ProductName</span>
            <span>Price</span>
            <span>City</span>
        </div>
    ) 
}