import Image from 'next/image'
import { climateCrisis } from '@/app/ui/fonts';
import Search from '@/app/components/ui/SearchInput'

export default function NavBar() {
    return (
        <div className={`${climateCrisis.className} bg-background  text-accent text-2xl p-3`}>
            <div className="flex gap-x-10">
                <div className='flex cursor-pointer'>
                    <Image
                        src="/fufel-market-favicon-color.svg"
                        width={35}
                        height={35}
                        alt=""
                    />
                    <span className="">FUFELMARKET</span>
                </div>
                <span className='cursor-pointer' >Category</span>
                <Search/>
            </div>
        </div>
    )
}