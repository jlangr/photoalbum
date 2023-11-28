import {useState} from 'react'
import {fetchPhotos} from '../clients/PhotosClient'
import {Photo} from './Photo'

export const PhotoAlbum = () => {
  const [photos, setPhotos] = useState(undefined)
  const [albumNumber, setAlbumNumber] = useState('')

  const retrievePhotos = async () =>
    setPhotos(await fetchPhotos(albumNumber))

  const albumNumberForHeader = photos?.length > 0 ? ` Album Number ${albumNumber}` : ''

  const isAlbumNumberEmpty = () => albumNumber === ''

  const renderRetrievedPhotos = () =>
    (photos.length === 0
      ? <p>*** No matching photos found for album id {albumNumber}***</p>
      : <ul className='photos'>
          {photos.map(photo => (<Photo key={photo.id} photo={photo}/>))}
        </ul>)

  return (
    <>
      <div className='retrieve'>
        <label id='albumNumberLabel'>Enter an album number</label>
        <input id='albumNumber' type='text'
               required
               aria-label='album' aria-labelledby='albumNumberLabel'
               value={albumNumber}
               onChange={e => setAlbumNumber(e.target.value.trim())}
        />
        <button onClick={retrievePhotos} className='button' disabled={isAlbumNumberEmpty()}>
          Retrieve photos
        </button>
      </div>
      <header className='App-header'>Photo Album{albumNumberForHeader}</header>
      {photos && renderRetrievedPhotos()}
    </>)
}
