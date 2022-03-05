import { memo, useState, useCallback } from 'react'

const Counter = memo(() => {
  const [counter, setCounter] = useState<number>(0)
  const handleDecrement = useCallback(() => {
    setCounter((prevCounter) => (prevCounter = prevCounter - 1))
  }, [])
  const handleIncrement = useCallback(() => {
    setCounter((prevCounter) => (prevCounter = prevCounter + 1))
  }, [])
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl">Counter Page</h1>
        <div className="flex flex-row justify-center items-center">
          <button
            className="text-2xl"
            onClick={handleDecrement}
            data-testid="decrement-button"
          >
            -
          </button>
          <span className="text-2xl mx-4" data-testid="counter">
            {counter}
          </span>
          <button
            className="text-2xl"
            onClick={handleIncrement}
            data-testid="increment-button"
          >
            +
          </button>
        </div>
      </div>
    </>
  )
})

export default Counter
