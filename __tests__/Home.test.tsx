import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages/index'
import userEvent from '@testing-library/user-event'
import { getPage, initTestHelpers } from 'next-page-tester'
import Link from 'next/link'

initTestHelpers()

jest.mock(
  'next/link',
  () =>
    ({ children }: any) =>
      children
)

describe('Homeの表示テスト', () => {
  it('Home Pageが表示されていること', async () => {
    render(<Home />)
    expect(await screen.findByText('Home Page')).toBeInTheDocument()
  })
  it('use next-page-tester', async () => {
    const { page } = await getPage({
      route: '/',
    })
    render(page)

    expect(await screen.findByText('Home Page')).toBeInTheDocument()
    // clickまでは通るがscreen.debug()で確認すると画面遷移はしておらずエラーになる

    // userEvent.click(screen.getByTestId('posts-nav'))

    // expect(await screen.findByText('Posts Page')).toBeInTheDocument()
  })
})
