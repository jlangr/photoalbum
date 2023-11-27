const photosRoute = 'https://jsonplaceholder.typicode.com/photos'

export const retrievePhotos = async () => {
  try {
    const response = await fetch(photosRoute)
    if (response.ok) return await response.json()

    console.error('Fetch failed')
  } catch (error) {
    console.error('Fetch errored:', error)
  }
}
