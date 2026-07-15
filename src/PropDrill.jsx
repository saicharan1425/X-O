
import { useState } from "react";
import { UserContext } from "./UserContext";

export const PropDrill = ({children}) => {

    const [user,setUser] = useState({
         name:'Charan',
         role:'dev',
         theme:'dark'
    })

    return <UserContext value={{user,setUser}}>{children}</UserContext>
}