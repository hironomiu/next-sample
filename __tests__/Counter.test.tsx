import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Counter from '../pages/counter'
import userEvent from '@testing-library/user-event'

describe('Counter', () => {
  it('decrement', () => {
    render(<Counter />)
    expect(screen.getByTestId('counter').textContent).toBe('0')
    userEvent.click(screen.getByTestId('decrement-button'))
    expect(screen.getByTestId('counter').textContent).toBe('-1')
  })
})
