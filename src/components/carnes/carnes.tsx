import { useEffect, useRef } from 'react';
import Cruda from '../../assets/img/crudo.png';


function CarnesComponent(){

    const cards : any = useRef({})

    useEffect(() => {

        //const elementsImage : any = Object.values(cards.current);
        //ResizeElement(elementsImage)


    }, [cards]);

    /*function ResizeElement(elementsImage : any){ 


        const platos : HTMLElement | null = document.querySelector('.platos.left img');

        if(platos){

            console.log(platos);

        }
    }*/

    return (
        <>
            <section className="carnes">
                <section>
                    <img src={Cruda} alt="carne" ref={(element : HTMLImageElement) => cards.current[0] = element} />
                    <img src={Cruda} alt="carne" ref={(element : HTMLImageElement) => cards.current[1] = element} />  
                    <img src={Cruda} alt="carne" ref={(element : HTMLImageElement) => cards.current[2] = element} />
                </section>
            </section>
        </>
    )

}

export default CarnesComponent;