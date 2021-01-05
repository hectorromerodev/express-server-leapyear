const express = require('express')
const app = express()

const { config } = require('./config/index')

app.get('/', (req, res) => {
  res.json({ res });
});

app.get('/leapyear', (req, res) => {
  res.json({
    year: 'asd',
  });
});

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`)
});
