import { useState } from "react"

export default function App(){

  const [square,setSqr]= useState(Array(9).fill(null))

  function onsqrClick(i){
    let ayoo = [...square]

    ayoo[i]='X'
   
    setSqr(ayoo)
  }

  return(
    <>
    <div className="board-row">
    <Square value={square[0]} sqrClick={()=>onsqrClick(0)}/>
    <Square value={square[1]} sqrClick={()=>onsqrClick(1)}/>
    <Square value={square[2]} sqrClick={()=>onsqrClick(2)}/>
    </div>
    <div className="board-row">
    <Square value={square[3]} sqrClick={()=>onsqrClick(3)}/>
    <Square value={square[4]} sqrClick={()=>onsqrClick(4)}/>
    <Square value={square[5]} sqrClick={()=>onsqrClick(5)}/>
    </div>
    <div className="board-row">
    <Square value={square[6]} sqrClick={()=>onsqrClick(6)}/>
    <Square value={square[7]} sqrClick={()=>onsqrClick(7)}/>
    <Square value={square[8]} sqrClick={()=>onsqrClick(8)}/>
    </div>
   
    </>
  )
}

function Square({value,sqrClick}){



  return <button className="square" onClick={sqrClick} >{value}</button>
}

