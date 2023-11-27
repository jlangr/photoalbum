import {PhotoAlbum} from '../PhotoAlbum'
import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import {testPhotos} from "./TestPhotos"
import {fetchPhotos} from '../../clients/PhotosClient'
jest.mock('../../clients/PhotosClient', () => ({
  fetchPhotos: jest.fn()
}))

describe('PhotoAlbum', () => {
  it('renders with button to retrieve photos', () => {
    render(<PhotoAlbum/>)

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Retrieve photos')
  })

  describe('rendering photos', () => {
    it('does not have any photos on render', () => {
      render(<PhotoAlbum/>)

      expect(screen.queryByRole('article')).not.toBeInTheDocument()
    })

    it('retrieves photos on button click', async () => {
      fetchPhotos.mockImplementation(() => Promise.resolve(testPhotos))
      render(<PhotoAlbum/>)
      const button = screen.getByRole('button')

      fireEvent.click(button)

      await waitFor(() => {
        expect(screen.getAllByRole('listitem')).toHaveLength(testPhotos.length)
      })
    })
  })
})
