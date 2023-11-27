import {useState} from 'react'
import {fetchPhotos} from '../clients/PhotosClient'

export const PhotoAlbum = () => {
  const [photos, setPhotos] = useState([])
  const [albumNumber, setAlbumNumber] = useState('')

  const retrievePhotos = async () => setPhotos(await fetchPhotos())

  return (
    <>
      <header className='App-header'>Photo Album</header>
      <button onClick={retrievePhotos} className='button' disabled={albumNumber === ''}>
        Retrieve photos
      </button>
      <label id='albumNumberLabel'>Album Number</label>
      <input id='albumNumber' type='text'
             required
             aria-label='album' aria-labelledby='albumNumberLabel'
             value={albumNumber}
             onChange={e => setAlbumNumber(e.target.value.trim())}
      />
      <ul id='photos'>
        {photos.map(photo =>
          (<li key={photo.id}>{photo.title}</li>))}
      </ul>
    </>)
}
