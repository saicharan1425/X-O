import { useState } from "react"

export const Board = ()=> {
    const [square,setSqr]= useState(Array(9).fill(null))
  const [isX, setisX] = useState(false)

  function onsqrClick(i){

  if(square[i] || calculateWinner(square)){
    return
  }
  let ayoo = [...square]
  if(isX){
     ayoo[i]='O';
  }else{ ayoo[i]='X';}


   
   setisX(!isX)
    setSqr(ayoo)
  }

  const winner = calculateWinner(square)
  let status;
 if (winner) {
  status = `🏆 Winner : ${winner === "X" ? "Player 1 (X)" : "Player 2 (O)"}`;
} else {
  status = `🎯 Turn : ${isX ? "Player 2 (O)" : "Player 1 (X)"}`;
}

  function calculateWinner(square) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(let i=0; i< lines.length; i++){
    const [a,b,c] = lines[i]
    if(square[a] && square[a] === square[b] && square[a] === square[c]){
      console.log('Winner ' +a);
      return square[a];
      
    }

  }
    return null;
 }

  return(
    <>
  <div className="game-container">
    <h1>Tic Tac Toe</h1>
    <div  className="board">
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
    </div>
   <p className="status" style={{color:'white'}}>{status}</p>
   <div>
    <br/>
   <button className="reset-btn" onClick={()=> {setSqr(Array(9).fill(null))
    setisX(false)
   }} style={{color:'White'}}>Reset</button>
   </div>
  </div>
    </>
  )
}

function Square({value,sqrClick}){
  return <button className="square" onClick={sqrClick} >{value}</button>
}