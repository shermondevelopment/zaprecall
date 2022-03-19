import './home.css'

import Button from '../../components/Button'

const Home = ({ stateHome }) => {


  return (
    <section className="home">
      <img src="/assets/img/lightning.svg" alt="zap" className="home-logo" />
      <h1 className="title-home">ZapRecall</h1>
      <Button onClick={() => stateHome(false)}>Iniciar Recall!</Button>
    </section>
  )
}

export default Home