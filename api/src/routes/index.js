const { Router } = require('express');

const { createProfesional,
        createPaciente } = require('./handlers')

const router = Router();

//Routes post:
router.post('/postProfesional', createProfesional); 
router.post('/postPaciente', createPaciente); 

module.exports = router;
