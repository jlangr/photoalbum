const productionRoute = 'https://jsonplaceholder.typicode.com/photos'

export const fetchPhotos = async (url = productionRoute) => {
  try {
    const response = await fetch(productionRoute)
    if (response.ok) return await response.json()

    console.error('Fetch failed')
  } catch (error) {
    console.error('Fetch errored:', error)
  }
}
