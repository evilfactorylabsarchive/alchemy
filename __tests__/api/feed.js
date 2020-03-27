import { createMocks } from 'node-mocks-http'
import fetch from '~/libs/fetch'
import feedApi from '~/pages/api/feed'

jest.mock('../../src/libs/fetch')

it('/api/feed', () => {
  fetch.mockReturnValue(Promise.resolve())

  const { req, res } = createMocks({ method: 'GET' })

  feedApi(req, res)

  expect(fetch).toHaveBeenCalled()
  expect(res._getStatusCode()).toBe(200)
  expect(res._getData()).toBeDefined()
})
