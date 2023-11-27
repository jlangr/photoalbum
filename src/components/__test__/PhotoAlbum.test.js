import {PhotoAlbum} from '../PhotoAlbum'
import {render, screen} from '@testing-library/react'

describe('PhotoAlbum', () => {
  it('renders with button to retrieve photos', () => {
    render(<PhotoAlbum/>)

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Retrieve photos')
  })
})
