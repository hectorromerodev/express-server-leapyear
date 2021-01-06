const express = require('express')
const app = express() // Iniciamos la app express

// Agregamos las configuraciones de nuestro servidor
const { config } = require('./config/index')

// Configuramos la entrada de nuestro servidor (No es necesario)
app.get('/', (req, res) => {
  res.send("This is a get with '/' ")
});

// Agregamos el enpoint y pedimos el year que queremos identificar como bisiesto o no.
app.get('/isleapyear/:year', (req, res) => {
  const year = req.params.year;
  // Respondemos con un JSON
  res.json({
    isLeapYear: isLeapYear(year),
  })
}) 

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`)
});

// Creamos metodo para identificar si es un bisisesto o no.
const isLeapYear = (year) => {
  return (year % 400 === 0) ? true :
    (year % 100 === 0) ? false :
      year % 4 === 0;
};