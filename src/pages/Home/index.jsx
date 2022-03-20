import { useState } from 'react'
import './home.css'

import Button from '../../components/Button'

const Home = ({ stateHome, deckOption }) => {
  
  const [step, setStep] = useState(1)
  const [deck, setDeck] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    deck.length !== 0 && deckOption(!deck || 'javascript')
    step === 1 ? setStep(2) : stateHome(false)
  }

 
  return (
    <section className="home">
      <img src="/assets/img/lightning.svg" alt="zap" className="home-logo" />
      <h1 className="title-home">ZapRecall</h1>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        
        {step === 2 && 
            <select name="tech" className={`input-meta ${step === 1 && 'none'}`} onChange={(e) => setDeck(e.currentTarget.value)} required>
                <option value="">Escolha seu Deck</option>
                <option value="javascript">Javascript</option>
                <option value="html5">HTML5</option>
                <option value="css3">CSS3</option>
            </select>
        }

        
        {step === 1 && 
          <input type="text" placeholder="Digite sua meta de zaps... Ex: 1, 2" className="input-meta" required pattern='\d'  />
        }
        <Button type="submit">Iniciar Recall!</Button>
      </form>
    </section>
  )
}

export default Home