import {PhotoAlbum} from '../PhotoAlbum'
import {fireEvent, render, screen} from '@testing-library/react'

describe('PhotoAlbum', () => {
  it('renders with button to retrieve photos', () => {
    render(<PhotoAlbum/>)

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Retrieve photos')
  })

  it('does not have any photos on render', () => {
    render(<PhotoAlbum/>)
    expect(screen.queryByRole('article')).not.toBeInTheDocument()
  })

  it('retrieves photos on button click', () => {
    render(<PhotoAlbum/>)
    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(screen.getByRole('article')).toBeInTheDocument()
  })
})
