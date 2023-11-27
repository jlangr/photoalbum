import {useState} from 'react'
import {fetchPhotos} from '../clients/PhotosClient'

export const PhotoAlbum = () => {
  const [photos, setPhotos] = useState(undefined)
  const [albumNumber, setAlbumNumber] = useState('')

  const retrievePhotos = async () =>
    setPhotos(await fetchPhotos(albumNumber))

  const albumNumberForHeader = photos?.length > 0 ? ` Album Number ${albumNumber}` : ''

  const isAlbumNumberEmpty = () => albumNumber === ''

  const Photos = () => (
    <ul id='photos'>
      {photos.map(photo =>
        (<li key={photo.id}>{photo.albumId} {photo.title}</li>))}
    </ul>)

  const renderRetrievedPhotos = () =>
    (photos.length === 0
      ? <p>*** No matching photos found for album id {albumNumber}***</p>
      : <Photos />)

  return (
    <>
      <header className='App-header'>Photo Album{albumNumberForHeader}</header>
      <button onClick={retrievePhotos} className='button' disabled={isAlbumNumberEmpty()}>
        Retrieve photos
      </button>
      <label id='albumNumberLabel'>Enter an album number</label>
      <input id='albumNumber' type='text'
             required
             aria-label='album' aria-labelledby='albumNumberLabel'
             value={albumNumber}
             onChange={e => setAlbumNumber(e.target.value.trim())}
      />
      {photos && renderRetrievedPhotos()}
    </>)
}
