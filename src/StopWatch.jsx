import {  useRef } from "react"


export const StopWatch = () => {

    
    let IntervalRef = useRef(null)

    function refUsed(){
        IntervalRef.current.focus()
    }
   
    return(
        <>
       <input ref={IntervalRef}/>
       <button onClick={refUsed}>ref Use</button>
        </>
    )

}