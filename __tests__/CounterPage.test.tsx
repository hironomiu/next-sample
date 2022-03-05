import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CounterPage from '../pages/counter'
import userEvent from '@testing-library/user-event'

describe('Counter', () => {
  it('Page rendered', () => {
    render(<CounterPage />)
    expect(screen.getByText('Counter Page')).toBeInTheDocument()
  })
  it('decrement', () => {
    render(<CounterPage />)
    expect(screen.getByTestId('counter').textContent).toBe('0')
    userEvent.click(screen.getByTestId('decrement-button'))
    expect(screen.getByTestId('counter').textContent).toBe('-1')
  })
  it('increment', () => {
    render(<CounterPage />)
    expect(screen.getByTestId('counter').textContent).toBe('0')
    userEvent.click(screen.getByTestId('increment-button'))
    expect(screen.getByTestId('counter').textContent).toBe('1')
  })
})
