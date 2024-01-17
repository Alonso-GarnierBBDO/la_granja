import { useEffect, useRef, useState} from 'react';
import Cruda from '../../assets/img/crudo.png';
import Cocido from '../../assets/img/cocido.png';


function CarnesComponent(){

    const carmeElement = useRef<HTMLImageElement | null>(null);
    const [parrilla, setParrilla] = useState(false);
    const [carneCocinada, setCarneCocinada] = useState(false);
    const [carneWidth, setCarneWidth] = useState<number>(0);

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
                const carne = carmeElement.current;

                console.log(platoLeft)


                if(carne){

                    if(screen.width >= 1600){
                        carne.width = heightElement - 40;
                        setCarneWidth(heightElement - 60 )
                        carne.style.left = `${platoLeft - 20}px`;
                    }else if(screen.width >= 1150){
                        carne.width = heightElement - 20;
                        setCarneWidth(heightElement - 30);
                        carne.style.left = `${platoLeft - 10}px`;
                    }else{
                        carne.width = heightElement - 10;
                        setCarneWidth(heightElement - 15);
                        carne.style.left = `${platoLeft - 5}px`;
                    }

                    carne.style.top = `${topPosition}px`;
                    carne.style.left = `${platoLeft}px`;

                }
            }   

        }

    }

    const clickEffect = () => {

        const getFuego : HTMLImageElement | null = document.querySelector('img.llamasImg');
        const baseImgRight : HTMLImageElement | null = document.querySelector('.bases.right img');
        const platilloElementRight : HTMLImageElement | null = document.querySelector('.platos.right img');
        const carne : HTMLImageElement | null = carmeElement.current
        const contador : HTMLParagraphElement | null = document.querySelector('.time .chronometer');

        if(getFuego && carne && baseImgRight && platilloElementRight && contador){

            if(!parrilla){

                const fuegoRect = getFuego.getBoundingClientRect();
                const xFuego = fuegoRect.x + (carne.offsetWidth / 2);
                const yFuego = fuegoRect.y + (carne.offsetHeight / 2);

                carne.style.left = `${xFuego}px`;
                carne.style.top = `${yFuego}px`;
                carne.style.width = `12%`;
                let milisegundos = 0;
                let segundos = 7;
                const milisegundoDiv : HTMLElement = contador.querySelector('.milisegundos') as HTMLElement;
                const segundosDiv : HTMLElement = contador.querySelector('.segundos') as HTMLElement;

                // console.log(contador);

                const deleteInternal = setInterval(() => {
    
                    if(segundos >= 0){
                        milisegundoDiv.innerHTML = `${milisegundos <= 9 ? '0' + milisegundos : milisegundos  }`;
                        segundosDiv.innerHTML = `${segundos <= 9 ? '0' + segundos : segundos  }`
                    }else{
                        clearInterval(deleteInternal);
                    }

                    if(milisegundos === 0){
                        milisegundos = 59
                        segundos --;
                    }else {
                        milisegundos --;
                    }

                }, 17);

                setParrilla(true);

                setTimeout(() => {
                    changeCarne(carne);
                }, 7000)

            }

            if(carneCocinada){  

                const baseRect = baseImgRight.getBoundingClientRect();
                const platoRect = platilloElementRight.getBoundingClientRect();
                const heightElement : number = baseImgRight.offsetHeight;
                let platoLeft = platoRect.left + ((platoRect.width / 2) - ((heightElement / 2)));
                const topPosition : number = baseRect.top + (screen.width * 0.023);

                carne.style.width = `${carneWidth}px`;


                if(carne){

                    if(screen.width >= 1600){
                        carne.width = heightElement - 40;
                        setCarneWidth(heightElement - 60 )
                        carne.style.left = `${platoLeft - 20}px`;
                    }else if(screen.width >= 1150){
                        carne.width = heightElement - 20;
                        setCarneWidth(heightElement - 30);
                        carne.style.left = `${platoLeft - 10}px`;
                    }else{
                        carne.width = heightElement - 10;
                        setCarneWidth(heightElement - 15);
                        carne.style.left = `${platoLeft - 5}px`;
                    }

                    carne.style.top = `${topPosition}px`;
                    carne.style.left = `${platoLeft}px`;

                }


                
                
            }


        }

    }

    const changeCarne = (carne : HTMLImageElement) => {
        carne.src = Cocido;
        setCarneCocinada(true);
    }

    return (
        <>
            <section className="carnes">
                <section>
                    <img src={Cruda} alt="carne" onClick={clickEffect} ref={carmeElement} />
                </section>
            </section>
        </>
    )

}

export default CarnesComponent;