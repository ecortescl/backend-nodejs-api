const express = require('express')
const app = express()
const port = 3009

const json = {
    'hola': 'hola',
    'hola': 'hola',
    'hola': 'hola',
}

app.get('/', (req, res) => {
  res.send(json)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
