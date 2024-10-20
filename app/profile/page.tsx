import { authStore } from "../store/auth.store";

export default function MyProfile() {
    return authStore.isAuthenticated ? 
    (<div>
        user authenticated
    </div>)
    :
    (<div>
        user are not authenticated
    </div>)
}