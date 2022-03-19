import React, { useState } from 'react'
import Home from './pages/Home'

const App = () => {

  const [pageHomeEnable, setPageHome] = useState(true)

  return (
    <>
      {pageHomeEnable && <Home stateHome={setPageHome} />}
    </>
  )
}

export default App