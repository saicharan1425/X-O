import { createContext } from "react";

export const UserContext = createContext({
  user:{  name:'Guest', role: 'Check', theme:'dark'},
  setUser: ()=>{}
})