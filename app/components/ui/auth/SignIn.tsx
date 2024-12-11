'use client'
import Image from 'next/image'
import styles from './form.module.scss'
import { merriweatherSans } from '@/app/ui/fonts'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { authStore } from '@/app/store/auth.store'
import ReactDOM from 'react-dom'

const SignInModal = observer(() => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
          if (event.key === "Escape" && authStore.isModalOpen) {
            authStore.closeModal();
          }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    if (!authStore.isModalOpen) return null;

    const handleBackdropClick = (event: React.MouseEvent) => {
        if (event.target === event.currentTarget) {
          authStore.closeModal();
        }
    };

    return ReactDOM.createPortal(
        <div className={styles.backdrop} onClick={handleBackdropClick}>
            <form className={`${styles['form-container']} ${merriweatherSans.className}`}>
                <div className={styles.auth}>
                    <div className={styles.title}>
                        <span>Вход</span>
                    </div>
                    <div className={styles['input-container']}>
                        <input type='text' name='email' placeholder='Почта'/>
                        <button type='submit'>Войти</button>
                    </div>
                </div>
                <div className={styles['auth-alt']}>
                    <div className={styles['vk-container']}>
                        <span>Или продолжить через</span>
                        <Image
                            src='/auth/vk.png'
                            height={47.52}
                            width={47.52}
                            alt=''
                        />
                    </div>
                    <div className={styles.policy}>
                        <span>При регистрации и входе вы соглашаетесь с условиями 
                        использования ФуфелМаркет и политикой конфиденциальности</span>
                    </div>
                </div>
            </form>
        </div>,
        document.getElementById("modal-root") as HTMLElement
    );
});

export default SignInModal;