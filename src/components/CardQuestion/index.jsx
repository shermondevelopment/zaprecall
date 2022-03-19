import { useState } from 'react'
import './cardquestion.css'

const CardQuestion = ({ title, question, answer, countAnswers, defineResult, setIconState, iconState }) => {

  const [viewQuestion, setViewQuestion] = useState(true)
  const [viewResponse, setViewResponse] = useState(false)

  const spinCard = () => {
    defineResult(countAnswers + 1)
    setViewResponse(true)
  }

  const notRemember = () => {
    setIconState([...iconState, '❌'])
  }

  const almostRemembered = () => {
    setIconState([...iconState, '❔'])
  }
  const right = () => {
    setIconState([...iconState, '✅'])
  }

  return (
    <div className="card">
      <div className={`card-container ${!viewQuestion ? 'show-question' : ''} ${viewResponse && 'card-effect'}`}>
        {viewQuestion && 
          <div class="initial-card">
              <span className="card-title">{title}</span>
              <button className="button-play" onClick={() => setViewQuestion(false)}>
                <img src="/assets/img/play.svg" alt="play" />
              </button>
            </div>
        }

          <>
            {!viewResponse && 
              <div className="front-card">
              {(!viewQuestion && !viewResponse) && <span>{question}</span>}
              {!viewQuestion && !viewResponse &&
              <button className="button-play girar" onClick={() => spinCard()}>
                <img src="/assets/img/girar.svg" alt="play" />
              </button>
              }
              </div>
            }
        
            <div className="back-card">
              <span>{answer}</span>
              {viewResponse &&
              <div className="types-of-answer">
                <button className="button-answer error" onClick={() => notRemember()}>Não lembrei</button>
                <button className="button-answer warning" onClick={() => almostRemembered()}>Quase não lembrei</button>
                <button className="button-answer sucess" onClick={() => right()}>Zap!</button>
              </div> 
              }
            </div>
          </>
      </div>
    </div>
  )
}

export default CardQuestion