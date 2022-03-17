import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages/index'
import userEvent from '@testing-library/user-event'
import { getPage, initTestHelpers } from 'next-page-tester'

initTestHelpers()

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
  })
})
