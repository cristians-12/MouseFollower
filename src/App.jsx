import { useState, useEffect } from "react";
import "./App.css";

const FollowMouse = ()=>{
  const [enable, setEnable] = useState(false);
  const [position, setPosition] = useState({x:0,y:0})
  useEffect(() => {
    
    const perseguir = (e)=>{
      const {clientX, clientY} = e;
      // console.log({clientX, clientY})
      setPosition({x:clientX,y:clientY})
    }
    if(enable){
      window.addEventListener("pointermove", perseguir)  
    }

    return ()=>{
      window.removeEventListener("pointermove", perseguir)
    }
  },[enable])
  return(

    <>
    <div
    style={{
      position: "absolute",
      borderRadius: "50%",
      left: -20,
      top: -20,
      width: 40,
      height: 40,
      opacity: 0.8,
      backgroundColor: "red",
      pointerEvents: 'none',
      transform: `translate(${position.x}px,${position.y}px)`,
    }}
  ></div>
  <button
    onClick={() => {
      setEnable(!enable);
    }}
  >
    {enable ? "Apagar " : "Encender "}
    seguidor de mouse
  </button>
  </>
  )
}

function App() {

  return (
    <>
      <h3>Proyecto: Mouse follower</h3>
      <FollowMouse/>
    </>
  );
}

export default App;
