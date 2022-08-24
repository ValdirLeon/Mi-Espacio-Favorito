const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const bodyparser = require('body-parser')
const path = require('path')

const app = express()

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

app.use(morgan('tiny'))

app.use(bodyparser.urlencoded({extended:true}))

app.set("view engine","ejs")

app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/images',express.static(path.resolve(__dirname,"assets/images")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
app.use('/actividades',express.static(path.resolve(__dirname,"assets/images/actividades")))
app.use('/cartas',express.static(path.resolve(__dirname,"assets/images/cartas")))
app.use('/logos',express.static(path.resolve(__dirname,"assets/images/logos")))
app.use('/partes',express.static(path.resolve(__dirname,"assets/images/partes")))

app.get('/',(req,res)=>{
    res.render('inicio')
})

app.get('/juegos',(req,res)=>{
    res.render('juegos')
})

app.get('/juegos/cuerpo-humano',(req,res)=>{
    res.render('cuerpohumano')
})

app.get('/juegos/simon-dice',(req,res)=>{
    res.render('simon')
})

app.get('/juegos/memoria',(req,res)=>{
    res.render('memoria')
})

app.get('/juegos/actividades',(req,res)=>{
    res.render('actividades')
})

app.get('/juegos/relajacion',(req,res)=>{
    res.render('relajacion')
})

app.listen(PORT,()=>{(console.log(`Servidor funcionando en http//localhost:${PORT}`))})