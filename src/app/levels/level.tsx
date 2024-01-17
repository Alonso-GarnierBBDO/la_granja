
import Logo from '../../assets/img/logo.png';
import LevelOne from './all/level_one';

function Level() {

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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore adipisci quae, ipsam rem quos commodi amet numquam nemo, quaerat iure cumque fugit tempora veritatis? Ipsam sapiente inventore adipisci porro magni?</p>
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