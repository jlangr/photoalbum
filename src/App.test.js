import {render, screen} from '@testing-library/react'
import App from './App'

describe('renders learn react page', () => {
  render(<App />)

  it('contains photo album component', () => {
    expect(screen.getByText('Photo Album')).toBeInTheDocument()
  })
});
