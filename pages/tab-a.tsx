import Layout from '../components/Layout'
import { useState } from 'react'

const TabA = () => {
  const [input, setInput] = useState('')
  const handleChange = (e) => {
    // setInput((_prev) => (_prev = e.target.value))
    setInput(e.target.value)
  }
  return (
    <Layout>
      <h1 className="text-2xl">TabA Page</h1>
      <span>{input}</span>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="border"
        data-testid="input"
      />
    </Layout>
  )
}
export default TabA
