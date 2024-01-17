import { useEffect, useRef } from 'react';
import Cruda from '../../assets/img/crudo.png';


function CarnesComponent(){

    const carmeElement = useRef<HTMLImageElement | null>(null);

    useEffect(() => {

        const baseImg : HTMLImageElement | null = document.querySelector('.bases.left img');
        const platilloElement : HTMLImageElement | null = document.querySelector('.platos.left img');

        if(baseImg && platilloElement){

            baseImg.addEventListener('load', () => {

                carnesResize(baseImg, platilloElement);

                window.addEventListener('resize', () => {
                    carnesResize(baseImg, platilloElement)
                });

            });
        }

    }, [carmeElement]);


    const carnesResize = (baseImg : HTMLImageElement, platilloElement: HTMLImageElement) => {


        if(baseImg.complete){

            const parentElement : HTMLElement | null = baseImg.parentElement;

            

            if(parentElement){
                const baseRect = baseImg.getBoundingClientRect();
                const platoRect = platilloElement.getBoundingClientRect();
                const heightElement : number = baseImg.offsetHeight;
                let platoLeft = platoRect.left + ((platoRect.width / 2) - ((heightElement / 2)));
                const topPosition : number = baseRect.top + (screen.width * 0.023);
                const imageLeft = screen.width * 0.04;
                const carne = carmeElement.current;

                console.log(platoLeft)


                if(carne){

                    if(screen.width >= 1600){
                        carne.width = heightElement - 40;
                        carne.style.left = `${platoLeft - 20}px`;
                    }else if(screen.width >= 1150){
                        carne.width = heightElement - 20;
                        carne.style.left = `${platoLeft - 10}px`;
                    }else{
                        carne.width = heightElement - 10;
                        carne.style.left = `${platoLeft - 5}px`;
                    }

                    carne.style.top = `${topPosition}px`;
                    carne.style.left = `${platoLeft}px`;

                }
            }   

        }

    }


    return (
        <>
            <section className="carnes">
                <section>
                    <img src={Cruda} alt="carne" ref={carmeElement} />
                </section>
            </section>
        </>
    )

}

export default CarnesComponent;