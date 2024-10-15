import styles from './form.module.scss'

export default function SignIn() {
    return (
        <form className={styles['form-container']}>
            <input placeholder="Логин" required></input>
            <input placeholder="Пароль" required></input>
            <button type='submit'>Войти</button>
        </form>
    )
}