import {PhotoAlbum} from '../PhotoAlbum'
import {act, fireEvent, render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import {fetchPhotos} from '../../clients/PhotosClient'

jest.mock('../../clients/PhotosClient')

describe('PhotoAlbum', () => {
  const photoRole = 'listitem'

  const typeIntoAlbumNumberInput = albumNumber => {
    const input = screen.getByRole('textbox')
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => userEvent.type(input, albumNumber))
  }

  const retrieveButton = () => screen.getByRole('button')

  const clickRetrieveButton = () => fireEvent.click(retrieveButton())

  describe('retrieve photos button', () => {
    it('renders with proper text', () => {
      render(<PhotoAlbum/>)

      const button = retrieveButton()
      expect(button).toBeInTheDocument()
      expect(button).toHaveTextContent('Retrieve photos')
    })

    it('is disabled button by default', () => {
      render(<PhotoAlbum/>)

      expect(retrieveButton()).toBeDisabled()
    })

    it('is enabled button when input populated', async () => {
      render(<PhotoAlbum/>)

      typeIntoAlbumNumberInput('1');

      expect(retrieveButton()).toBeEnabled()
    })
  })

  describe('rendering photos', () => {
    it('shows no photos or message on page load', () => {
      render(<PhotoAlbum/>)

      expect(screen.queryByRole(photoRole)).not.toBeInTheDocument()
      expect(screen.queryByText('*** No matching photos found ***')).not.toBeInTheDocument()
    })

    const testPhotos = [
      { albumId: 1, id: 1, title: 'A' },
      { albumId: 1, id: 2, title: 'B' }
    ]

    it('renders photos on submit', async () => {
      fetchPhotos.mockReturnValueOnce(Promise.resolve(testPhotos))
      render(<PhotoAlbum/>)
      typeIntoAlbumNumberInput('2')

      clickRetrieveButton()

      expect(fetchPhotos).toHaveBeenCalledWith('2')
      await waitFor(() =>
        expect(screen.getAllByRole(photoRole)).toHaveLength(testPhotos.length))
    })

    it('shows no photos message when none retrieved', async () => {
      fetchPhotos.mockReturnValueOnce(Promise.resolve([]))
      render(<PhotoAlbum/>)
      typeIntoAlbumNumberInput('999')

      clickRetrieveButton()

      await waitFor(() => {
        expect(screen.getByText('*** No matching photos found for album id 999***')).toBeInTheDocument()
      })
    })
  })
})
