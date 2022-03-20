import React, { useState } from 'react'
import Home from './pages/Home'
import QuestionPage from './pages/Questions'

const App = () => {

  const [pageHomeEnable, setPageHome] = useState(true)
  const [chosenDesk, setChosenDeck] = useState('0')


  return (
    <>
      {pageHomeEnable && <Home stateHome={setPageHome} deckOption={setChosenDeck} />}
      {!pageHomeEnable && <QuestionPage hiddenPage={setPageHome} />}
    </>
  )
}

export default App