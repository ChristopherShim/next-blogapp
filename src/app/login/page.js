

import styles from "./pages.module.css"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Loginpage(){
    // const { data: session } = useSession();
    // if(!session) {
    //     return (
    //         <div>
    //             <button>Login</button>
    //         </div>
    //     )
    // }

    return (
        <div>
            <button>Logout</button>
        </div>
    )
}