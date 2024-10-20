import { userStore } from "@/app/store/user.store"

export default function ProfilePage({ params } : { params : { id: string } }) {
    const userData = userStore.getUserByID(Number(params.id))
    return userData ? (
        <div>
            {userData.name}
        </div>
    )
    :
    (<div>
        User not found
    </div>)
}