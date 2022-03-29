import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Posts from '../pages/posts'
import { getPage, initTestHelpers } from 'next-page-tester'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import 'whatwg-fetch'
import userEvent from '@testing-library/user-event'

initTestHelpers()

const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
    const query = req.url.searchParams
    const _limit = query.get('_limit=10')
    return res(
      ctx.status(200),
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: 'mock title 1',
          body: 'mock body 1',
        },
        {
          userId: 2,
          id: 2,
          title: 'mock title 2',
          body: 'mock body 2',
        },
      ])
    )
  }),
]

const server = setupServer(...handlers)

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
  cleanup()
})

afterAll(() => {
  server.close()
})

describe('/posts dummy data', () => {
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
    expect(
      screen.getByText('userId: 2 ,id: 2 ,title: dummy title 2')
    ).toBeInTheDocument()
  })
  it('/posts use msw', async () => {
    const { page } = await getPage({
      route: '/posts',
    })
    render(page)
    // timeoutの設定例
    expect(
      await screen.findByText('Posts Page', undefined, {
        timeout: 2000,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByText('userId: 1 ,id: 1 ,title: mock title 1')
    ).toBeInTheDocument()
    expect(
      screen.getByText('userId: 2 ,id: 2 ,title: mock title 2')
    ).toBeInTheDocument()
    userEvent.click(screen.getByTestId('posts-1'))
    expect(await screen.findByText('Post Data')).toBeInTheDocument()
  })
  it('/posts use msw 404 eroor', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/posts?_limit=10',
        (req, res, ctx) => {
          // TODO function using "req.url.searchParams"
          // const query = req.url.searchParams
          // const _limit = query.get('_limit=10')
          return res(ctx.status(404))
        }
      )
    )
    const { page } = await getPage({
      route: '/posts',
    })
    render(page)
    expect(
      screen.getByText('This page could not be found.')
    ).toBeInTheDocument()
    // screen.debug()
  })
})
