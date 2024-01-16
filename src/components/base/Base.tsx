import { useRef, useEffect, useState } from 'react';

import BaseIMG from '../../assets/img/base.png';
import PlatoIMG from '../../assets/img/plato.png';

function BaseLeft({ classType } : { classType : string }){

    const platosIMG = useRef<HTMLImageElement | null>(null);
    const [heightPlato, setHeightPlato] = useState<number>(0);


    useEffect(()=>{

        const img : HTMLImageElement | null  = platosIMG.current

        if(img){

            img.onload = () => {

                heightResize(img)

                window.onresize = () => {

                    heightResize(img)
                    
                }

            }

        }
        
    }, [platosIMG])

    const heightResize = (img : HTMLImageElement) => {

        if(screen.width >= 1600){
            setHeightPlato(img.offsetHeight - 100);
        }else if(screen.width >= 1150){
            setHeightPlato(img.offsetHeight - 70);
        }else if(screen.width >= 900){
            setHeightPlato(img.offsetHeight - 50);
        }else if(screen.width >= 800){
            setHeightPlato(img.offsetHeight - 40);
        }else{
            setHeightPlato(img.offsetHeight - 30);
        }

    }

    return (
        <>
            <section className={`bases ${classType}`}>
                    <img className='base' src={BaseIMG} alt="Base imagen" ref={platosIMG}/>
            </section>
            <section className={`platos ${classType}`}>
                <img className='plato' style={{ height: `${heightPlato }px` }} src={PlatoIMG} alt="Plato imagen" /> 
            </section>
        </>
    )

}

export default BaseLeft