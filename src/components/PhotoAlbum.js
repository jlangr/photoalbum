import {useState} from 'react'
import {fetchPhotos} from '../clients/PhotosClient'
import {Photo} from './Photo'

export const PhotoAlbum = () => {
  const [photos, setPhotos] = useState(undefined)
  const [albumNumber, setAlbumNumber] = useState('')

  const retrievePhotos = async () =>
    setPhotos(await fetchPhotos(albumNumber))

  const albumNumberForHeader = photos?.length > 0 ? ` Number ${albumNumber}` : ''

  const albumHeader = `Photo Album${albumNumberForHeader}`

  const isAlbumNumberEmpty = albumNumber === ''

  const RetrievedPhotos = () =>
    (photos.length === 0
      ? <p>*** No matching photos found for album id {albumNumber}***</p>
      : <ul className='photos'>
          {photos.map(photo => (<Photo key={photo.id} photo={photo}/>))}
        </ul>)

  const changedAlbumNumber = e => setAlbumNumber(e.target.value.trim());

  return (
    <>
      <div className='retrieve'>
        <label id='albumNumberLabel'>Enter an album number</label>
        <input type='text'
               required
               aria-label='albumNumber' aria-labelledby='albumNumberLabel'
               value={albumNumber}
               onChange={changedAlbumNumber}/>
        <button onClick={retrievePhotos} className='button' disabled={isAlbumNumberEmpty}>
          Retrieve photos
        </button>
      </div>
      <header className='App-header'>{albumHeader}</header>
      {photos && <RetrievedPhotos/>}
    </>)
}
