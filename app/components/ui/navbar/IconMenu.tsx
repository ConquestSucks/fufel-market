import React from 'react';
import AuthImg from  '@/public/navbar/auth-button.svg'
import styles from './icon.module.scss'
import Link from 'next/link';

const IconMenu = () => {
    return (
        <div className={styles.container}>
            <Link href='/auth'>
                <AuthImg className={styles.icon}/>
            </Link>
        </div>
    );
};

export default IconMenu;
