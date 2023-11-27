// integration test--include in slow + volatile suite
import {fetchPhotos, productionRoute} from '../PhotosClient'

describe('retrieving photos', () => {
  it('returns at least one photo by default', async () => {
    const photos = await fetchPhotos()

    expect(photos[0]?.title).not.toBe('')
  })

  it('rejects on fetch error', async () => {
    await expect(fetchPhotos(productionRoute + 'x')).rejects
      .toEqual(new Error('Fetch failed with status 404'))
  })

  xit('rejects on fetch throw', async () => {
    await expect(fetchPhotos('https://localhost/xx')).rejects
      .toEqual(new Error('Fetch errored'))
  })
})
