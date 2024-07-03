
import { useState } from "react";
import Level from "../../levels/level";

function Home(){

    const [reproducir, setReproducir] = useState<boolean>(false);

    const play = () => {
        setReproducir(true);
    }

   async function fetchElement() {

        try {

            await fetch('http://127.0.0.1:8000/api/nuevo-empleo', {
                method: "POST",
                // Puedes agregar más opciones según sea necesario, como headers y body
            }).then(async (res) => {
                const data = await res.json(); // Esto lee el cuerpo de la respuesta como JSON
                console.log(data);
            }).catch((error) => {
                console.error('Error en la solicitud:', error);
            });
            
              

        } catch (err) {

            console.error('Tuvimos un error');
            console.error(err);

        }

   }

    // await fetch(`http://127.0.0.1:8000/api/nuevo-empleo`, {
        //     method: "POST",
        //     credentials: 'same-origin',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     // body: JSON.stringify({}),
        // }).then((res) => {
        //     console.log(res)
        // });

    return (
        <>
            {
                !reproducir ? (
                    <section className="home_page">
                        <button onClick={play}>Play</button>
                        <button onClick={fetchElement}>fetch</button>
                    </section>
                ) : <Level/>
            }
            
        </>
    )

}

export default Home