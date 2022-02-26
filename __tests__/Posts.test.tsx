import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Posts from '../pages/posts'

describe('', () => {
  it('', async () => {
    render(
      <Posts
        posts={[
          {
            userId: 1,
            id: 1,
            title: 'dummy title 1',
            body: 'dummy body 1',
          },
          {
            userId: 2,
            id: 2,
            title: 'dummy title 2',
            body: 'dummy body 2',
          },
        ]}
      />
    )
    expect(await screen.findByText('Posts Page')).toBeInTheDocument()
    expect(
      screen.getByText('userId: 1 ,id: 1 ,title: dummy title 1')
    ).toBeInTheDocument()
  })
})
