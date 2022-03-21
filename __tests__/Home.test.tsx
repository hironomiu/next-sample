import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages/index'
import userEvent from '@testing-library/user-event'
import { getPage, initTestHelpers } from 'next-page-tester'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import 'whatwg-fetch'

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
})

afterAll(() => {
  server.close()
})

describe('Homeの表示テスト', () => {
  it('Home Pageが表示されていること', async () => {
    render(<Home />)
    expect(await screen.findByText('Home Page!')).toBeInTheDocument()
  })
  it('use next-page-tester', async () => {
    const { page } = await getPage({
      route: '/',
    })
    render(page)

    expect(await screen.findByText('Home Page!')).toBeInTheDocument()

    userEvent.click(screen.getByTestId('counter-nav'))
    expect(await screen.findByText('Counter Page')).toBeInTheDocument()

    userEvent.click(screen.getByTestId('tab-a-nav'))
    expect(await screen.findByText('TabA Page')).toBeInTheDocument()

    userEvent.click(screen.getByTestId('posts-nav'))
    expect(
      await screen.findByText('Posts Page', undefined, {
        timeout: 1000,
      })
    ).toBeInTheDocument()
    expect(
      screen.getByText('userId: 1 ,id: 1 ,title: mock title 1')
    ).toBeInTheDocument()
    expect(
      screen.getByText('userId: 2 ,id: 2 ,title: mock title 2')
    ).toBeInTheDocument()
  })
})
