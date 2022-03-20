import { useState, useEffect } from 'react'
import CardQuestion from '../../components/CardQuestion'
import Decks from '../../decks'
import './question.css'

const QuestionPage = ({ hiddenPage, deck }) => {

  const [countAnswers, setCountAnswers] = useState(0)
  const [iconsState, setIconsState] = useState([])
  const [reset, setReset] = useState(false)
  const [, setHits] = useState([])
  const [, setDoubt] = useState([])
  const [error, setError] = useState([])

  const resetCall = () => {
    setCountAnswers(0)
    setIconsState([])
    setReset(true);
    hiddenPage(true)
  }

  console.log(Decks, Decks[deck])

  useEffect(() => {
    const calculateEvaluation = () => {
      setHits(iconsState.filter( hits => hits === '✅' ).length)
      setDoubt(iconsState.filter( doubt => doubt === '❔' ).length)
      setError(iconsState.filter( error => error === '❌' ).length)
    }
    calculateEvaluation()
    console.log(iconsState)
  }, [iconsState])

  return (
    <div className="questions">
      <div className="header-question">
        <img src="/assets/img/lightning.svg" className="header-question-logo" alt="zap" />
        <h1 className="header-question-title">ZapRecall</h1>
      </div>
      {Decks[deck].map( (item, index) => {
          return <CardQuestion key={index} title={`Pergunta ${index + 1}`} question={item.question} answer={item.answer} defineResult={setCountAnswers} countAnswers={countAnswers} setIconState={setIconsState} iconState={iconsState} reset={reset}/>
      } )}
      
      <div className="question-progress">
        <div className="status"> 
          {/* Caso não esqueça nenhum card */}
          {error === 0 && countAnswers === Decks[deck].length  &&
           <>
            <span className="parabens">
              🎉🎉🎈🎈 Parabéns!
            </span>
            <span className="parabens message">
              Você não esqueceu de nenhum flashCard!
            </span>
           </>
          }
          {error !== 0 && countAnswers === 5 &&
           <>
            <span className="puts">
              😵😵😵 Puts...
            </span>
            <span className="parabens message">
              Ainda falta alguns...<br/>
              Mas não desanime!
            </span>
           </>
          }
          <span>{countAnswers}/{Decks[deck].length} CONCLUÍDOS</span>
          <div className="icons">
            {iconsState.map( (icon, index) => <span key={index}>{icon}</span> )}
          </div>
          <button className="reset-cards" onClick={resetCall}>REINICIAR RECALL</button>
        </div>
      </div>
    </div>
  )
}

export default QuestionPage