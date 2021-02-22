const { Router } = require('express')
const path = require('path')
const inicio = require('./../controladores/inicio')

const router = Router()

// inicio.autorizacion
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'vistas', 'Inicio.html'))
})

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'vistas', 'Login.html'))
})
router.post('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'vistas', 'Inicio.html'))
})
router.get('/ayuda' ,(req, res) => {
    res.sendFile(path.join(__dirname, '..', 'vistas', 'Ayuda.html'))
})
router.get('/administrar-usuarios' ,(req, res) => {
    res.sendFile(path.join(__dirname, '..', 'vistas', 'Ayuda.html'))
})

module.exports = router