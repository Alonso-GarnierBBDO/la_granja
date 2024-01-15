import { useEffect, useRef, useState } from "react"

import homeConfig from "../../hooks/home"

type RefCanva = {

  current : HTMLCanvasElement | null

}

function Application() {

    const canva : RefCanva = useRef< HTMLCanvasElement | null >(null)

    const [full, setFull] = useState<boolean>(false);
    const [textFull, setTextFull] = useState<string>('Expand window');

    useEffect( () => {
      if(canva.current){
        homeConfig(canva.current);
      }

      window.onresize = () => {

        if(canva.current){
          homeConfig(canva.current);
        }
      }

    }, [])

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
        <canvas id="canva" ref={canva}></canvas>

          <button id="expand_window" onClick={expandWindow}> { textFull } </button>

      
      </>
    )
  }
  
  export default Application
  