import {useState} from 'react'
import {fetchPhotos} from '../clients/PhotosClient'

export const PhotoAlbum = () => {
  const [photos, setPhotos] = useState([])
  const [albumNumber, setAlbumNumber] = useState('')

  const retrievePhotos = async () => setPhotos(await fetchPhotos(albumNumber))

  const headerAlbumNumber = photos.length > 0 ? ` Album Number ${albumNumber}` : ''

  return (
    <>
      <header className='App-header'>Photo Album{headerAlbumNumber}</header>
      <button onClick={retrievePhotos} className='button' disabled={albumNumber === ''}>
        Retrieve photos
      </button>
      <label id='albumNumberLabel'>Enter an album number</label>
      <input id='albumNumber' type='text'
             required
             aria-label='album' aria-labelledby='albumNumberLabel'
             value={albumNumber}
             onChange={e => setAlbumNumber(e.target.value.trim())}
      />
      <ul id='photos'>
        {photos.map(photo =>
          (<li key={photo.id}>{photo.albumId} {photo.title}</li>))}
      </ul>
    </>)
}
