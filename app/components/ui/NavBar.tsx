import Image from 'next/image'
import { climateCrisis } from '@/app/ui/fonts';
import Search from '@/app/components/ui/SearchInput'
import Link from 'next/link';

export default function NavBar() {
    return (
        <div className={`${climateCrisis.className} bg-background  text-accent text-2xl p-3`}>
            <div className="flex gap-x-10 justify-between">
                <Link className='flex cursor-pointer w-30' href='/'>
                    {/* <Image
                        src="/fufel-market-favicon-color.svg"
                        width={35}
                        height={35}
                        alt=""
                    /> */}
                    <span className="">FUFELMARKET</span>
                </Link>
                <Search/>
                <div className='w-30 flex justify-end'>
                    <Image
                        src='fufel-market-favicon-color.svg'
                        width={35}
                        height={35}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}