import { merriweatherSans } from '@/app/ui/fonts';
import FlagIcon from "@/public/navbar/flag.svg"
import styles from './navbar.module.scss'
import IconMenu from '@/app/components/ui/navbar/IconMenu'
import Link from 'next/link';

export default function NavBar() {
    return (
        <div className={styles.background}>
            <div className={styles.content}>
                <Link className={styles.brand} href='/'>
                    <span className={merriweatherSans.className}>ФУФЕЛМАРКЕТ.</span>
                    <FlagIcon/>
                </Link>
                <div className={styles.auth}>
                    <IconMenu />
                </div>
            </div>
        </div>
    )
}