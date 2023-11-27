import {render, screen} from '@testing-library/react'
import {Photo} from '../Photo'

describe('<Photo>', () => {
  it('renders with id and title', () => {
    const aPhoto = {id: 42, albumId: 2, title: 'My Pic', url: 'x', thumbnailUrl: 'y'}

    render(<Photo photo={aPhoto}/>)

    expect(screen.getByText('[42] My Pic')).toBeInTheDocument()
  })
})
