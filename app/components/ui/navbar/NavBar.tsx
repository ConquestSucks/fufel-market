/* import Image from 'next/image' */
import { climateCrisis, openSans } from '@/app/ui/fonts';
import Search from '@/app/components/ui/SearchInput'
import IconMenu from '@/app/components/ui/navbar/IconMenu'
import Link from 'next/link';

export default function NavBar() {
    return (
        <div className={`bg-primary  text-accent text-2xl p-3`}>
            <div className="flex gap-x-10 justify-between items-center">
                <Link className='flex cursor-pointer w-30' href='/'>
                    <span className={`${climateCrisis.className}`}>FUFELMARKET</span>
                </Link>
                <Search/>
                <div className={`${openSans.className} w-1/4 flex justify-end`}>
                    <IconMenu />
                </div>
            </div>
        </div>
    )
}