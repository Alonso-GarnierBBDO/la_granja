
import { useState } from "react";
import Level from "../../levels/level";

function Home(){

    const [reproducir, setReproducir] = useState<boolean>(false);

    const play = () => {
        setReproducir(true);
    }

    return (
        <>
            {
                !reproducir ? (
                    <section className="home_page">
                        <button onClick={play}>Play</button>
                    </section>
                ) : <Level/>
            }
            
        </>
    )

}

export default Home