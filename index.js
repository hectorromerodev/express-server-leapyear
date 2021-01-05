const express = require('express')
const app = express()

const { config } = require('./config/index')

app.get('/', (req, res) => {
  res.send("This is a get with '/' ")
});

app.get('/leapyear/:year', (req, res) => {
  const year = req.params.year;
  res.json({
    isLeapYear: isLeapYear(year),
  });
}); 

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`)
});

const isLeapYear = (year) => {
  return (year % 400 === 0) ? true :
    (year % 100 === 0) ? false :
      year % 4 === 0;
};