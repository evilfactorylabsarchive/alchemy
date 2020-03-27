import fetch from 'isomorphic-unfetch'
import fetcher from '~/libs/fetch'

jest.mock('isomorphic-unfetch')

fetch.mockReturnValue(
  Promise.resolve({
    json: () => ({}),
  })
)

it('should exists', async () => {
  const data = await fetcher()

  expect(fetch).toHaveBeenCalledTimes(1)
  expect(data).toBeDefined()
})
