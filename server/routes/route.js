const express = require('express')
const route = express.Router()

const service = require('../services/render.js')

route.get('/', service.inicio)

route.get('/juegos',service.menu)

route.get('/juegos/cuerpo-humano',service.humano)

route.get('/juegos/simon-dice',service.simon)

route.get('/juegos/memoria',service.memoria)

route.get('/juegos/actividades',service.actividad)

route.get('/juegos/relajacion',service.relajacion)

module.exports=route