'use client'
import { observer } from "mobx-react-lite";
import { authStore } from "../store/auth.store";
import SignIn from "../components/ui/auth/SignIn";
import SignUp from "../components/ui/auth/SignUp";

function AuthPage() {
    const toggleButton = () => authStore.toggleAuth()

    return (
        <div className="w-full h-screen flex flex-col justify-start items-center">
            <div className="flex flex-col gap-2 items-center p-9 rounded-xl bg-accnet shadow-md">
                <div className="flex gap-2 p-2 min-w-fit rounded-lg bg-accent cursor-pointer text-lg font-semibold" onClick={toggleButton}>
                    {authStore.authForm ?'Вход' : 'Регистрация'}
                </div>
                <div className="h-full">
                    {authStore.authForm ? (<SignIn/>) : (<SignUp/>)}
                </div>
            </div>
        </div>
    )
}

export default observer(AuthPage)