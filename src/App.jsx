import { Suspense, useState } from 'react'
import './App.css'
import Quote from './components/axios_swr/Quote'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Suspense>
      <Quote/>
      </Suspense>
   </>
  )
}

export default App
