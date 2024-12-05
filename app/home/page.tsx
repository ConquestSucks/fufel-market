import styles from './home.module.scss';
import SearchBar from "../components/ui/searchbar/SearchBar";
import { merriweatherSans } from '@/app/ui/fonts';
import Image from 'next/image';

export default function HomePage() {

    return (
        <div className={`${merriweatherSans.className} ${styles.home} h-full`}>
            <div className={`${styles.block}`}>
                <span className='text'>ФуфелМаркет – покупки и продажи без фуфла!</span>
                <SearchBar />
            </div>
            <Image
                src='/home/laptop.png'
                alt=''
                width={500}
                height={500}
                className={styles.laptop}
            />
            <Image
                src='/home/phone.png'
                alt=''
                width={500}
                height={300}
                className={styles.phone}
            />
            <Image
                src='/home/sofa.png'
                alt=''
                width={1000}
                height={1000}
                className={styles.sofa}
            />
        </div>
    );
}
