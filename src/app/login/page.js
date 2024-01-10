import useSession from "next-auth/react"

export default function Loginpage(){
    const {data:session} = useSession()
    return (
        <div>
            <b>{session?.user?.email}</b>
        </div>
    )
}