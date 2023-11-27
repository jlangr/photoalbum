// integration test--include in slow + volatile suite
import {fetchPhotos, productionRoute} from '../PhotosClient'

describe('contract tests for retrieving photos', () => {
  it('returns at least one photo by default', async () => {
    const photos = await fetchPhotos('1')

    expect(photos[0]?.title).not.toBe('')
  })

  it('it returns only photos with specified album ID', async () => {
    const photos = await fetchPhotos('1')

    expect(photos.length).toBeGreaterThan(0)
    expect(photos.every(photo => photo.albumId === 1)).toBe(true)
  })

  it('rejects on fetch error', async () => {
    await expect(fetchPhotos('1', productionRoute + 'x')).rejects
      .toEqual(new Error('Fetch failed with status 404'))
  })

  describe('things that log to syserr, so we can suppress', () => {
    const error = console.error
    beforeEach(() => console.error = () => {})
    afterEach(() => console.error = error)

    it('rejects on fetch throw', async () => {
      await expect(fetchPhotos('1', 'https://localhost/xx')).rejects
        .toEqual(new Error('Fetch errored'))
    })
  })
})
