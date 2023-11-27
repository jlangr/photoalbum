import {useState} from "react";

export const PhotoAlbum = () => {
  const [photos, setPhotos] = useState([])

  const retrievePhotos = () => {
    setPhotos([...photos, {id: '1', name: 'photo 1'}])
  }

  return (
    <>
      <header className='App-header'>Photo Album</header>
      <button onClick={retrievePhotos} className='App-button'>
        Retrieve photos
      </button>
      <div id='photos'>
        {photos.map(photo => (
          <p key={photo.id} role='article'>photo {photo.name}</p>
        ))}
      </div>
    </>)
}
