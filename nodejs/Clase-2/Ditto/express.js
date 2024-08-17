const express = require('express')
const ditto = require('./pokemon/ditto.json')
const path = require('path')

const PORT = process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by')

app.use(express.json())

//Aquí inicia

//Pista: res.send NO ENVÍA UN JSON, habrá algo que sí lo haga ?