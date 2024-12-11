'use client'
import Image from 'next/image'
import styles from './form.module.scss'
import { merriweatherSans } from '@/app/ui/fonts'
import { observer } from 'mobx-react-lite'
import { FormEvent, useEffect, useRef  } from 'react'
import { authStore } from '@/app/store/auth.store'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

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

    const inputRef = useRef<HTMLInputElement>(null);

    if (!authStore.isModalOpen) return null;

    const handleBackdropClick = (event: React.MouseEvent) => {
        if (event.target === event.currentTarget) {
          authStore.closeModal();
        }
    };

    const handleFormOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (!authStore.isCodeSent && inputRef.current) {
            //this.currentUser.email
            authStore.sendVerificationCode(inputRef.current.value)

            inputRef.current.value = '';
        }
    }

    return ReactDOM.createPortal(
        <div className={styles.backdrop} onClick={handleBackdropClick}>
            <form className={`${styles['form-container']} ${merriweatherSans.className}`} onSubmit={handleFormOnSubmit}>
                <div className={styles.auth}>
                    <div className={styles.title}>
                        <span>{!authStore.isCodeSent ? 'Вход' : 'Код подтверждения'}</span>
                    </div>
                    <div className={styles['input-container']}>
                        <input 
                            type='text'
                            ref={inputRef}
                            name={!authStore.isCodeSent ? 'email' : 'verificationCode'} 
                            placeholder={!authStore.isCodeSent ? 'Почта' : 'Код'}/>
                        <button 
                            type='submit'
                            className={classNames(styles.button, { [styles.stretched]: authStore.isCodeSent })}>
                                {!authStore.isCodeSent ? 'Войти' : 'Проверить'}
                        </button>
                    </div>
                </div>
                {!authStore.isCodeSent && (
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
                )}
            </form>
        </div>,
        document.getElementById("modal-root") as HTMLElement
    );
});

export default SignInModal;