import React,{useState,useEffect} from 'react'; 
import './App.css';
import GridItem from '../GridItem';
import Header from '../Header';
import Footer from '../Footer';


const App=()=> {
  const [gamestate,setGameState]=useState(["","","","","","","","",""]);
  const winConditions=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  const [playerTurn,setPlayerTurn]=useState(true);
  const [result,setResult]=useState(false);
  const [display,setDisplay]=useState("it's X players turn!");
  const [textDisplay,setTextDisplay]=useState("");
  const [res,setReset]=useState(false);

  

  const handlePlayerClick=(colIndex)=>{
    setReset(false);
    //console.log({colIndex},"cell is clicked!")
    
    if(gamestate[colIndex]!==""|| result==true){
      return;
    }
    // in react js we never mutate values by refernce
    // so make a copy i.e copy by value  sdcxv

    const copyOfGameState=gamestate;
    // make changes in it
    copyOfGameState[colIndex]=playerTurn?"X":"0";
    // updating the original gatestate

    setGameState(copyOfGameState);
    setPlayerTurn(!playerTurn);

  }

  useEffect(()=>{
    for(let i=0;i<winConditions.length;i++){
      const [a,b,c]=winConditions[i];
      if(gamestate[a]===gamestate[b]&& gamestate[b]===gamestate[c]&&gamestate[a]!==""){
        //console.log(gamestate[a],"wins!!")
        setResult(true);
      }
    }

    //console.log(gamestate);
  });
  useEffect(()=>{
    if(!gamestate.includes("")){
      setDisplay("It is a Draw!")
    }
    else if(result===true){
            setDisplay("Player "+((playerTurn?"0 ":"X ")+"Wins!"))
        }else{
            setDisplay("Next player"+(playerTurn ? "X":"0")); 
        }
        //console.log(display);
  });

  function reset(){
    setGameState(["","","","","","","","",""]);
    setPlayerTurn(true);
    setReset(true);
    setResult(false);
  }

    return (//all UI part fdsg
      //DRY:donot repeat yourself!
      <div id="root">
      <Header />
      {/* every attribute in dom, we can pass as props in REact cool!! */}
      <div className="game--container">
        {gamestate.map(
          (value,Index)=><GridItem 
          colIndex={Index}
          key={Index}
          gamestate={gamestate}
          res={res} 
          handleClick={result?(()=>{}):handlePlayerClick.bind()}/>)};
      </div>
      <div>{display}</div>
      <button onClick={reset}>Reset</button>
      <Footer playerTurn={playerTurn} result={result}/></div>
    )
  }




export default App;
