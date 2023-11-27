import {PhotoAlbum} from '../PhotoAlbum'
import {act, fireEvent, render, screen, waitFor} from '@testing-library/react'
import {testPhotos} from "./TestPhotos"
import {fetchPhotos} from '../../clients/PhotosClient'
import userEvent from "@testing-library/user-event";

jest.mock('../../clients/PhotosClient', () => ({
  fetchPhotos: jest.fn()
}))

describe('PhotoAlbum', () => {
  const typeIntoAlbumNumberInput = albumNumber => {
    const input = screen.getByRole('textbox')
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => userEvent.type(input, albumNumber))
  }

  const clickRetrieveButton = () => {
    const button = screen.getByRole('button')
    fireEvent.click(button)
  }

  describe('retrieve photos', () => {
    it('renders a button', () => {
      render(<PhotoAlbum/>)

      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
      expect(button).toHaveTextContent('Retrieve photos')
    })

    it('disables button by default', () => {
      render(<PhotoAlbum/>)

      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
    })

    it('enables button when input populated', async () => {
      render(<PhotoAlbum/>)

      typeIntoAlbumNumberInput('1');

      const button = screen.getByRole('button')
      expect(button).toBeEnabled()
    })
  })

  describe('rendering photos', () => {
    it('does not have any photos by default', () => {
      render(<PhotoAlbum/>)

      expect(screen.queryByRole('listitem')).not.toBeInTheDocument()
    })

    it('renders photos on submit', async () => {
      fetchPhotos.mockImplementation(() => Promise.resolve(testPhotos))
      render(<PhotoAlbum/>)
      typeIntoAlbumNumberInput('1')

      clickRetrieveButton();

      await waitFor(() => {
        expect(screen.getAllByRole('listitem')).toHaveLength(testPhotos.length)
      })
    })
  })
})
