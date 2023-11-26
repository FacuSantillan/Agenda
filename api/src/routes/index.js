const { Router } = require('express');

const { createProfesional,
        createPaciente,
        createUsuario, 
        createTurno } = require('./handlers')

const { getPaciente,
        getProfesional,
        getTurno } = require('./handlers')

const router = Router();

//Routes post:
router.post('/postProfesional', createProfesional); 
router.post('/postPaciente', createPaciente); 
router.post('/postUsuario', createUsuario)
router.post('/postTurno', createTurno)

//Routes gets:
router.get('/getpacientes', getPaciente)
router.get('/getprofesional', getProfesional)
router.get('/getturno', getTurno)

module.exports = router;
