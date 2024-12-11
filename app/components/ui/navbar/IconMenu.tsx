'use client';
import React from 'react';
import AuthImg from  '@/public/navbar/auth-button.svg'
import styles from './icon.module.scss'
import { authStore } from '@/app/store/auth.store';

const IconMenu = () => {
    return (
        <div className={styles.container}>
            <div onClick={() => authStore.openModal()}>
                <AuthImg className={styles.icon}/>
            </div>
        </div>
    );
};

export default IconMenu;
