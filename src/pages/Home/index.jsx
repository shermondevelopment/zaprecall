import { useState } from 'react'
import './home.css'

import Button from '../../components/Button'

const Home = ({ stateHome, deckOption }) => {
  
  const [step, setStep] = useState(1)
  const [deck, setDeck] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(deck)
    deck.length !== 0 && deckOption(deck)
    step === 1 ? setStep(2) : stateHome(false)
  }


  return (
    <section className="home">
      <img src="/assets/img/lightning.svg" alt="zap" className="home-logo" />
      <h1 className="title-home">ZapRecall</h1>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>

          <select className={`input-meta ${step === 1 && 'none'}`} onChange={(e) => setDeck(e.currentTarget.value)}>
            <option value="1">Escolha seu Deck</option>
            <option value="1">Javascript</option>
            <option value="2">HTML5</option>
            <option value="3">CSS3</option>
          </select>
        
        {step === 1 && 
          <input type="text" placeholder="Digite sua meta de zaps... Ex: 1, 2" className="input-meta" required pattern='\d'  />
        }
        <Button type="submit">Iniciar Recall!</Button>
      </form>
    </section>
  )
}

export default Home