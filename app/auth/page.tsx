'use client'
import { observer } from "mobx-react-lite";
import { authStore } from "../store/auth.store";
import SignIn from "../components/ui/auth/SignIn";
import SignUp from "../components/ui/auth/SignUp";

function AuthPage() {
    const toggleButton = () => authStore.toggleAuth()

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="flex flex-col gap-2 items-center h-full">
                <div className="flex gap-2">
                    <span className="cursor-pointer" onClick={toggleButton}>{authStore.auth ?'Вход' : 'Регистрация'}</span>
                </div>
                <div className="h-full">
                    {authStore.auth ? (<SignIn/>) : (<SignUp/>)}
                </div>
            </div>
        </div>
    )
}

export default observer(AuthPage)