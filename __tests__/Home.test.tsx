import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages/index'

describe('Homeの表示テスト', () => {
  it('Home Pageが表示されていること', async () => {
    render(<Home />)
    expect(await screen.findByText('Home Page')).toBeInTheDocument()
  })
})
