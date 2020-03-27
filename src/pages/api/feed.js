import fetch from '~/libs/fetch'

export default (req, res) => {
  fetch('https://alchemy.edgy-network.workers.dev').then((data) => {
    res.json(data)
  })
}
