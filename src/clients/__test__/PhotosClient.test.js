// integration test--include in slow & volatile suite
import {fetchPhotos} from '../PhotosClient'

describe('retrieving photos', () => {
  it('returns at least one photo by default', async () => {
    const photos = await fetchPhotos()

    expect(photos.length).toBeGreaterThan(0)
    expect(photos[0].title).not.toBe('')
  })
})
