import { useEffect, useRef } from "react"

import homeConfig from "../../hooks/home"

type RefCanva = {

  current : HTMLCanvasElement | null

}

function Application() {

    const canva : RefCanva = useRef< HTMLCanvasElement | null >(null)

    useEffect( () => {
      if(canva.current){
        homeConfig(canva.current);
      }
    }, [])

    return (
      <>
        <canvas id="canva" ref={canva}></canvas>
      </>
    )
  }
  
  export default Application
  