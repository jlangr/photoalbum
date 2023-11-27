import {useState} from 'react'
import {fetchPhotos} from '../clients/PhotosClient'

export const PhotoAlbum = () => {
  const [photos, setPhotos] = useState([])

  const retrievePhotos = async () => setPhotos(await fetchPhotos())

  return (
    <>
      <header className='App-header'>Photo Album</header>
      <button onClick={retrievePhotos} className='App-button'>
        Retrieve photos
      </button>
      <ul id='photos'>
        {photos.map(photo =>
          (<li key={photo.id}>{photo.title}</li>))}
      </ul>
    </>)
}
