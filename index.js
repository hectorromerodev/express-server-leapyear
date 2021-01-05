const express = require('express')
const app = express()

const { config } = require('./config/index')

app.length('/leapyear', (req, res) => {
  res.json({
    res,
    year: 'asd',
  })
})

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`)
})
