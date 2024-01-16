import { useEffect, useRef, useState } from 'react';

import Parrilla from '../../../assets/img/parrilla.png';
import Llamas from '../../../assets/img/llamas.png';

function LevelOne(){

    const parrilla = useRef<HTMLImageElement | null>(null);
    const llamas = useRef<HTMLImageElement | null>(null);

    useEffect( () => {

        const parrillaTag : HTMLImageElement | null = parrilla.current;
        const llamasTag : HTMLImageElement | null = llamas.current;

        if(parrillaTag && llamasTag){

            parrillaTag.onload = () => {

                /*const heightParrilla : number = parrillaTag.offsetHeight;
                const heightWindow : number = window.innerHeight * 0.35;
                llamasTag.style.transform = `translateY(${heightWindow}px)`*/

            }
        }

    }, [])

    return (
        <>
            <section>
                <section className="parrilla">
                    <section>
                        <img ref={ parrilla } className='parrillaImg' src={Parrilla} alt="Parrilla imagen" />
                        <img ref={llamas} src={Llamas} className='llamasImg' alt="Llamas imagen" />
                    </section>
                </section>
            </section>
        </>
    )

}

export default LevelOne;