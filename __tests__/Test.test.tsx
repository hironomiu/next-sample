import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('', () => {
  it('', () => {
    render(
      <div>
        <span data-testid="test">Test</span>
      </div>
    )

    expect(screen.getByTestId('test')).toBeInTheDocument()
  })
})
