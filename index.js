const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.all('/sleep/:duration', (req, res) => {
  const duration = parseFloat(req.params.duration)
  if (isNaN(duration) || duration > 300) {
    return res.status(400).send(`Invalid delay request ${duration}. Max is 300 seconds`)
  }
  setTimeout(() => {
    return res.send(`Delayed request for ${duration} seconds`)
  }, duration * 1_000)
})

app.listen(port, () => {
  console.log(`Started on ${port}`)
})
