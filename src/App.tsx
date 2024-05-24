import React, { useState } from 'react'
import Comp1 from './comps/Comp1'
import Comp2 from './comps/Comp2'
import Comp3 from './comps/Comp3'
import Comp4 from './comps/Comp4'

const App = () => {
  const [page , setPage] = useState(1)
  return (
    <div>
      <button onClick={() => setPage(prev => prev + 1)}>change</button>
      {page === 1 && <Comp1 />}
      {page === 2 && <Comp2 />}
      {page === 3 && <Comp3 />}
      {page === 4 && <Comp4 />}
    </div>
  )
}

export default App
