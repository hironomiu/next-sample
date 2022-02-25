import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages/index'

describe('', () => {
  it('', async () => {
    render(<Home />)

    expect(await screen.findByText('Home Page')).toBeInTheDocument()
    screen.debug()
  })
})
