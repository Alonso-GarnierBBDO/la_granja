import { useEffect, useState } from "react";

import Application from "./app/application/application";
import ErrorOrientation from "./app/errors/orientation";


// Desde esta pantalla se muestra el sitio

type Orientation = {
  angle : number,
  type: string,
  onchange: Function | null,
}

type OrientationValidate = {
  correct: boolean,
  mobile: boolean
}

function App() {

  // Mostramos el error un error en el video juego
  const [error, setError] = useState<boolean>(false);

  useEffect( () => {

    const previousOrientation : Orientation = screen.orientation;

    orientationError(previousOrientation)

    previousOrientation.onchange = () => {

      orientationError(previousOrientation)

    }

  });

  const orientationError =  (previousOrientation : Orientation) => {

    const orientationValidate : OrientationValidate = validateOrientation(previousOrientation);

    if(orientationValidate.mobile){

      if(!orientationValidate.correct){
        setError(true);
      }else{
        setError(false);
      }

    }else{
      setError(false);
    }
  }

  return (
    <>
      <Application/>
      {
        error ? (
          <ErrorOrientation/>
        ) : null
      }
    </>
  )
}

// Ejecutamos la orientacion del dispositivo

function validateOrientation(previousOrientation : Orientation) : OrientationValidate {

  if(mobileOperatingSystem()){

    return getOrientation(previousOrientation)

  }

  return {

    correct: false,
    mobile: false

  };

}

// Validamos la orientacion y mostramos el error

function getOrientation(previousOrientation : Orientation) : OrientationValidate{

  if(previousOrientation.angle){

    return {

      correct: true,
      mobile: true
      
    };

  }
  
  return {

    correct: false,
    mobile: true

  };

}


// Validamos si el dispositivo es mobile


/**
 * 
 * @returns { boolean }  - Si la funcion mobileOperatingSystem retorna true el usuario esta utilizando un sistema operativo mobile
 */

function mobileOperatingSystem() : boolean {

  const userAgent : string = navigator.userAgent;

  if(/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent) ){
    return true;
  }

  return false;

}

export default App
