import { render, cleanup, waitFor } from '@testing-library/react'

import useSWR from 'swr'

import Index from '~/pages/index'
import fetcher from '~/libs/fetch'
import feedMocks from '../mocks/feed'

afterAll(() => {
  cleanup()
})

jest.mock('swr')

useSWR.mockReturnValue({ data: feedMocks })

describe('pages/index.js', () => {
  it('should have index page', () => {
    const { container } = render(<Index />)

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should call the API', () => {
    const { container } = render(<Index />)

    expect(container.firstChild).toBeInTheDocument()
    expect(useSWR).toHaveBeenCalled()
    expect(useSWR).toHaveBeenCalledWith('/api/feed', fetcher)
  })

  it('should render basic data', async () => {
    const { getByText } = render(<Index />)

    await waitFor(() => expect(useSWR).toHaveBeenCalled())

    expect(getByText(/some title/)).toBeInTheDocument()
    expect(getByText(/some excerpt/)).toBeInTheDocument()
    expect(getByText(/some author name/)).toBeInTheDocument()
  })
})
