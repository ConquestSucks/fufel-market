import styles from './form.module.scss'

export default function SignIn() {
    return (
        <form className={styles['form-container']}>
            <div className={styles['input-container']}>
                <input placeholder="Логин" required></input>
                <input placeholder="Пароль" required></input>
            </div>
            <button type='submit'>Войти</button>
        </form>
    )
}