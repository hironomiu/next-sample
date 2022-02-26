import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TabA from '../pages/tab-a'

describe('', () => {
  it('', async () => {
    render(<TabA />)
    expect(await screen.findByText('TabA Page')).toBeInTheDocument()
  })
})
