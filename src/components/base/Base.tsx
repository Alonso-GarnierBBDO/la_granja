import { useRef, useEffect, useState } from 'react';

import BaseIMG from '../../assets/img/base.png';
import PlatoIMG from '../../assets/img/plato.png';

function BaseLeft({ classType } : { classType : string }){

    const baseItem = useRef<HTMLImageElement | null>(null);
    const [heightPlato, setHeightPlato] = useState<number>(0);


    useEffect(()=>{

        const img : HTMLImageElement | null  = document.querySelector('.bases img');


        if(img){

            img.onload = () => {

                let height : number = img.offsetHeight;
                const allImagePlatos : NodeListOf<HTMLImageElement> = document.querySelectorAll('.platos');

                allImagePlatos.forEach( ( element : HTMLImageElement ) => {

                    heightResize(element, height)

                });

                window.onresize = () => {

                    height = img.offsetHeight;

                    allImagePlatos.forEach( ( element : HTMLImageElement ) => {

                        heightResize(element, height)
    
                    });
                    
                }


            }

        }
        
    }, [baseItem])

    const heightResize = (img : HTMLImageElement, height : number) => {

        let style = `${height - 30}px`;

        if(screen.width >= 1600){
            style = `${height - 100}px`;
        }else if(screen.width >= 1150){
            style = `${height - 70}px`;
        }else if(screen.width >= 900){
            style = `${height - 50}px`;
        }else if(screen.width >= 800){
            style = `${height - 40}px`;
        }else{
            style = `${height - 30}px`;
        }

        img.style.height = style;

    }

    return (
        <>
            <section className={`bases ${classType}`}>
                    <img className='base' src={BaseIMG} alt="Base imagen" ref={baseItem}/>
            </section>
            <section className={`platos ${classType}`}>
                <img className='plato'  src={PlatoIMG} alt="Plato imagen" /> 
            </section>
        </>
    )

}

export default BaseLeft