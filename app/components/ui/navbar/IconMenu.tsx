import Image from 'next/image'
import styles from './icon.module.scss'
import Link from 'next/link';

const IconMenu = () => {
    return (
        <div className={styles.container}>
            <Image
                src='fufel-market-favicon-white.svg'
                width={35}
                height={35}
                alt=""
            />
            <div className={styles.menu} >
                <Link href='/auth' className={styles.text}>Вход</Link>
            </div>
        </div>
    );
};

export default IconMenu;
