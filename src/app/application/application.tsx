import { useState } from "react"

import Home from "./home/home";


function Application() {


    const [full, setFull] = useState<boolean>(false);
    const [textFull, setTextFull] = useState<string>('Expand window');


    function expandWindow(){

      const documentElement : Document = document;
      const bodyElement : HTMLElement = document.body;

      if(full){ 
        documentElement.exitFullscreen();
        setFull(false);
        setTextFull('Expand window')
      }else{
        bodyElement.requestFullscreen();
        setFull(true);
        setTextFull('Reduce window') 
      }

    }

    return (
      <>
        <section className="game">
          <Home/>
        </section>
        <button id="expand_window" onClick={expandWindow}> { textFull } </button>
      </>
    )
  }
  
  export default Application
  