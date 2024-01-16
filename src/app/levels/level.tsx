
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
          <section className="vallas"></section>
          <section className='level'>
            <LevelOne/>
          </section>
        </section>
      </>
    )
  }
  
  export default Level