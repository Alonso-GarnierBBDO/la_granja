import { useRef, useEffect} from 'react';

import BaseIMG from '../../assets/img/base.png';
import PlatoIMG from '../../assets/img/plato.png';

function BaseLeft({ classType } : { classType : string }){

    const baseItem = useRef<HTMLImageElement | null>(null);


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
        
    }, [baseItem]);


    const heightResize = (img : HTMLImageElement, height : number) => {

        let style : number = height - 30;

        if(screen.width >= 1600){
            style = height - 100;
        }else if(screen.width >= 1150){
            style = height - 70;
        }else if(screen.width >= 900){
            style = height - 50;
        }else if(screen.width >= 800){
            style = height - 40;
        }else{
            style = height - 30;
        }

        img.style.height = `${style}px`;


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