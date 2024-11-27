import { userStore } from "@/app/store/user.store"

export default async function ProfilePage({ params } : { params : { id: string } }) {
    const userData = await userStore.getUser(Number(params.id))

    return userData ? (
        <div className="flex flex-col">
            <span>{userData.name}</span>
            <span>{userData.email}</span>
            <span>{userData.role}</span>
            <span>{userData.phone ? userData.phone : "телефон не указан"}</span>
        </div>
    )
    :
    (<div>
        User not found
    </div>)
}