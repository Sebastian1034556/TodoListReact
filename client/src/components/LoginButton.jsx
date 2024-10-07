import {useAuth0} from "@auth0/auth0-react"

export function LoginButton(){
    const { loginWithRedirect } = useAuth0()
    return(
        <div className="flex justify-center items-center">
            <button onClick={()=> loginWithRedirect()}>Login</button>
        </div>
    )
}