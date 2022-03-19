import { useState } from 'react'
import CardQuestion from '../../components/CardQuestion'
import './question.css'

const QuestionPage = () => {

  const [countAnswers, setCountAnswers] = useState(0)
  const [iconsState, setIconsState] = useState([])

  return (
    <div className="questions">
      <div className="header-question">
        <img src="/assets/img/lightning.svg" className="header-question-logo" alt="zap" />
        <h1 className="header-question-title">ZapRecall</h1>
      </div>
      <CardQuestion title="Pergunta 1" question="O que é JSX?" answer="JSX é uma sintaxe para escrever HTML dentro do JS" defineResult={setCountAnswers} countAnswers={countAnswers} setIconState={setIconsState} iconState={iconsState}/>
      <CardQuestion title="Pergunta 2" question="O que é JSX?" answer="JSX é uma sintaxe para escrever HTML dentro do JS" defineResult={setCountAnswers} countAnswers={countAnswers} setIconState={setIconsState} iconState={iconsState}/>
      <CardQuestion title="Pergunta 3" question="O que é JSX?" answer="JSX é uma sintaxe para escrever HTML dentro do JS" defineResult={setCountAnswers} countAnswers={countAnswers} setIconState={setIconsState} iconState={iconsState}/>
      <CardQuestion title="Pergunta 4" question="O que é JSX?" answer="JSX é uma sintaxe para escrever HTML dentro do JS" defineResult={setCountAnswers} countAnswers={countAnswers} setIconState={setIconsState} iconState={iconsState}/>
      <CardQuestion title="Pergunta 5" question="O que é JSX?" answer="JSX é uma sintaxe para escrever HTML dentro do JS" defineResult={setCountAnswers} countAnswers={countAnswers} setIconState={setIconsState} iconState={iconsState}/>
      <div className="question-progress">
        <div className="status"> 
          <span>{countAnswers}/4 CONCLUÍDOS</span>
          <div className="icons">
            {iconsState.map( icon => <span>{icon}</span> )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionPage