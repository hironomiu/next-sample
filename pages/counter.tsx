import Layout from '../components/Layout'
import { useState } from 'react'
const Counter = () => {
  const [counter, setCounter] = useState<number>(0)
  const handleDecrement = () => {
    setCounter((prevCounter) => (prevCounter = prevCounter - 1))
  }

  return (
    <Layout>
      <h1 className="text-2xl">Counter Page</h1>
      <div className="flex flex-row">
        <button onClick={handleDecrement} data-testid="decrement-button">
          -
        </button>
        <span data-testid="counter">{counter}</span>
        <button>+</button>
      </div>
    </Layout>
  )
}

export default Counter
