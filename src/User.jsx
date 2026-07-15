import { use } from "react"
import { UserContext } from "./UserContext"

export const User = () =>{

   const {user,setUser} =  use(UserContext)

   function onChangee(){

    setUser({...user, theme: user.theme === 'dark' ? 'light' : 'dark'}  )
   }

    return(
        <>
        <p>User: {user.name}</p>
        <p>theme:{user.theme}</p>
        <button onClick={onChangee}>Change name</button>
        </>
    )
}