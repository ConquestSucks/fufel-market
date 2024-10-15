import styles from './form.module.scss'

export default function SignUp() {
    return (
        <form className={styles['form-container']}>
            <input type="email" placeholder="Почта" required></input>
            <input type="text" placeholder="Логин" required></input>
            <input type="password" placeholder="Пароль" required></input>
            <input type="password" placeholder="Подтверждение пароля" required></input>
            <button type='submit'>Зарегистрироваться</button>
        </form>
    )
}