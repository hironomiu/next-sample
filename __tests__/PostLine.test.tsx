import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PostLine from '../components/parts/PostLine'

type Line = {
  id: number
  userId: number
  title: string
  body: string
}

const line: Line = {
  id: 1,
  userId: 1,
  title: 'dummy title 1',
  body: 'dummy body 1',
}

describe('parts/PostLine', () => {
  it('', () => {
    render(<PostLine line={line} />)
    expect(
      screen.getByText('userId: 1 ,id: 1 ,title: dummy title 1')
    ).toBeInTheDocument()
  })
})
