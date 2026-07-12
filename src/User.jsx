import { useContext } from "react"
import { UserContext } from "./UserContext"

export const User = () =>{

   const userd =  useContext(UserContext)

    return(
        <>
        <p>User: {userd.name}</p>
        </>
    )
}