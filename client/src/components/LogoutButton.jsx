import { useAuth0 } from "@auth0/auth0-react"

export function LogoutButton({classNames}){
    const {logout} = useAuth0()
    return(
        <div className="flex justify-center items-center">
            <button className={classNames} onClick={()=> logout()}>
                Logout
            </button>
        </div>
    )
}