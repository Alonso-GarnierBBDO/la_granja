
import Logo from '../../assets/img/logo.png'

function Level() {

    return (
      <>
        <section className="allLevels">
          <section className="logo">
            <img src={Logo} alt='Logo la granja'/>
          </section>
          <section className="silueta"></section>
          <section className="vallas"></section>
        </section>
      </>
    )
  }
  
  export default Level