import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import TabA from '../pages/tab-a'

describe('TabA', () => {
  it('render & input test cases', async () => {
    render(<TabA />)
    expect(await screen.findByText('TabA Page')).toBeInTheDocument()
    userEvent.type(screen.getByTestId('input'), 'abcd')
    expect(await screen.findByText('abcd')).toBeInTheDocument()
  })
})
