
import Logo from '../../assets/img/logo.png';
import LevelOne from './all/level_one';

function Level() {


    const fireSound = new Audio('assets/sonido/fire.mp3');
    fireSound.volume = 0.1  
    fireSound.loop = true;
    fireSound.play();


    return (
      <>
        <section className="allLevels">
          <section className="logo">
            <img src={Logo} alt='Logo la granja'/>
          </section>
          <section className="silueta"></section>
          <section className='time'>
              <div className='chronometer'>
                <span className='segundos'>00</span>:<span className='milisegundos'>00</span>
              </div>
              <div>
                <p>La carne nunca se debe salar durante la cocción ni mucho menos debe usarse sal fina porque ésta le extrae los jugos. Para este proceso se debe usar una sal gruesa o semigruesa antes o después de la cocción. Sí se hace antes de ponerla en la parrilla, debe “masajearse” el corte para que quede bien impregnado.</p>
              </div>
          </section>
          <section className="vallas"></section>
          <section className='level'>
            <LevelOne/>
          </section>
        </section>
      </>
    )
  }
  
  export default Level