import { useState, useEffect } from 'react'
import './cardquestion.css'

const CardQuestion = ({ title, question, answer, countAnswers, defineResult, setIconState, iconState, reset }) => {

  const [viewQuestion, setViewQuestion] = useState(true)
  const [viewResponse, setViewResponse] = useState(false)
  const [statusAnswers, setStatusAnswers] = useState({ enabled: false, type: 'warning', icon: '', acertos: 0, erros: 0, warning: 0 });

  const spinCard = () => {
    setViewResponse(true)
  }

  const notRemember = () => {
    setIconState([...iconState, '❌'])
    setStatusAnswers({ ...statusAnswers, enabled: true, type: 's-error', icon: '❌',  erros: statusAnswers.erros + 1})
    defineResult(countAnswers + 1)
    setViewQuestion(true)
  }

  const almostRemembered = () => {
    setIconState([...iconState, '❔'])
    setViewQuestion(true)
    defineResult(countAnswers + 1)
    setStatusAnswers({ ...statusAnswers, enabled: true, type: 's-warning', icon: '❔', warning: statusAnswers.warning + 1 })
  }

  const right = () => {
    setIconState([...iconState, '✅'])
    setViewQuestion(true)
    defineResult(countAnswers + 1)
    setStatusAnswers({ ...statusAnswers, enabled: true, type: 's-success', icon: '✅', acertos: statusAnswers.acertos + 1 })
  }
  
  useEffect(() => {
    setViewQuestion(true)
    setViewResponse(false)
    setStatusAnswers({ enabled: false, type: 'warning', icon: '', acertos: 0, erros: 0, warning: 0 })
  }, [reset])

  return (
    <div className="card">
      <div className={`card-container ${!viewQuestion ? 'show-question' : ''} ${viewResponse && !viewQuestion && 'card-effect'}`}>
        {viewQuestion && 
          <div className="initial-card">
              <span className={`card-title ${statusAnswers.enabled && statusAnswers.type }`}>{title}</span>
              {!statusAnswers.enabled && 
                <button className="button-play" onClick={() => setViewQuestion(false)}>
                 <img src="/assets/img/play.svg" alt="play" />
               </button>
              }
              {statusAnswers.enabled && 
                <button className="button-play">
                  {statusAnswers.icon}
                </button>
              }
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
           
            {!viewQuestion &&
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
            }
          </>
      </div>
    </div>
  )
}

export default CardQuestion