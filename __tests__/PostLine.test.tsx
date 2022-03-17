import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PostLine from '../components/parts/PostLine'
import { POST } from '../types'

const post: POST = {
  id: 1,
  userId: 1,
  title: 'dummy title 1',
  body: 'dummy body 1',
}

describe('parts/PostLine', () => {
  it('', () => {
    render(<PostLine post={post} />)
    expect(
      screen.getByText('userId: 1 ,id: 1 ,title: dummy title 1')
    ).toBeInTheDocument()
  })
})
