export const productionRoute = 'https://jsonplaceholder.typicode.com/photos'

export const fetchPhotos = async (albumId, route = productionRoute) => {
  try {
    const url = `${route}?albumId=${albumId}`
    const response = await fetch(url)
    if (response.ok) return await response.json()

    return Promise.reject(new Error(`Fetch failed with status ${response.status}`))
  } catch (error) {
    return Promise.reject(new Error(`Fetch errored`))
  }
}
