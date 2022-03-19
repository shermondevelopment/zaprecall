import CardQuestion from '../../components/CardQuestion'
import './question.css'

const QuestionPage = () => {
  return (
    <div className="questions">
      <div className="header-question">
        <img src="/assets/img/lightning.svg" className="header-question-logo" alt="zap" />
        <h1 className="header-question-title">ZapRecall</h1>
      </div>
      <CardQuestion title="Pergunta 1" question="O que é JSX?" answer="JSX é uma sintaxe para escrever HTML dentro do JS" />
      <CardQuestion title="Pergunta 2" question="O que é JSX?"/>
      <CardQuestion title="Pergunta 3" question="O que é JSX?"/>
      <CardQuestion title="Pergunta 4" question="O que é JSX?"/>
      <CardQuestion title="Pergunta 5" question="O que é JSX?"/>
    </div>
  )
}

export default QuestionPage