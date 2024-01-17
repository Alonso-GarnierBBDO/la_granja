import { useEffect, useRef } from 'react';
import Cruda from '../../assets/img/crudo.png';


function CarnesComponent(){

    const carmeElement = useRef<HTMLImageElement | null>(null);

    useEffect(() => {

        const platilloImg : HTMLImageElement | null = document.querySelector('.bases.left img');

        if(platilloImg){

            platilloImg.addEventListener('load', () => {

                carnesResize(platilloImg);

                window.addEventListener('resize', () => {
                    carnesResize(platilloImg)
                });

            });
        }

    }, [carmeElement]);


    const carnesResize = (platilloImg : HTMLImageElement) => {


        if(platilloImg.complete){

            const parentElement : HTMLElement | null = platilloImg.parentElement;

            if(parentElement){
                const heightElement : number = platilloImg.offsetHeight;
                const topPosition : number = platilloImg.getBoundingClientRect().top + (screen.width * 0.023);
                const imageLeft = screen.width * 0.04;
                const carne = carmeElement.current;

                console.log(imageLeft);

                if(carne){

                    if(screen.width >= 1600){
                        carne.width = heightElement - 40;
                    }else if(screen.width >= 1150){
                        carne.width = heightElement - 20;
                    }else{
                        carne.width = heightElement - 10;
                    }

                    carne.style.top = `${topPosition}px`;
                    carne.style.left = `${imageLeft}px`;

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