import { useState, useRef } from "react"


export const StopWatch = () => {

    const [time,setTime] = useState(0)
    let IntervalRef = useRef(null)

    function startTime(){
        console.log(IntervalRef);
        console.log(IntervalRef.current);
      IntervalRef.current =  setInterval(()=>{

            setTime((prev)=>prev+1);},1000)
        
    }

    // const startTime = () =>{
    //     setInterval(() =>{
    //         setTime((prev)=>prev+1)
    //     },1000)
    // }

    function stop(){
    clearInterval(IntervalRef.current)
    }

    return(
        <>
        <h2>Time: {time}</h2>
        <button onClick={startTime}>Start</button>
        <button onClick={stop}>stop</button>
        </>
    )

}