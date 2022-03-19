import React, { useState } from 'react'
import Home from './pages/Home'
import QuestionPage from './pages/Questions'

const App = () => {

  const [pageHomeEnable, setPageHome] = useState(true)

  return (
    <>
      {pageHomeEnable && <Home stateHome={setPageHome} />}
      {!pageHomeEnable && <QuestionPage />}
    </>
  )
}

export default App