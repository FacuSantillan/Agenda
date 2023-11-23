const postProfesional = require('../controller/postProfesional');
const postPaciente = require('../controller/postPaciente');
const postTurno = require('../controller/postTurno');
const postUsuario = require('../controller/postUsuario');

//------------------------Crear Profesional------------------------//

const createProfesional = async (req, res) => {
    try {
        const { DNI, nombre, especialidad, celular, dias, horas } = req.body;
        const dia = JSON.stringify(dias);
        const hora = JSON.stringify(horas);

        if (!( DNI && nombre && especialidad && celular && dias && horas)) {
            return res.status(400).send('Faltan datos');
        };
  
        const data = {
            DNI, 
            nombre, 
            especialidad, 
            celular, 
            dia,
            hora
        };

        const newProfesional = await postProfesional(data);
        const dniProfesional = newProfesional.DNI;
        
        res.status(200).json(newProfesional);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//------------------------Crear Paciente------------------------//

const createPaciente = async (req, res) => {
    try {
        const { DNI, nombre, domicilio, celular, obraSocial, fechaDeNacimiento } = req.body;


        if (!( DNI && nombre && domicilio && celular && obraSocial && fechaDeNacimiento)) {
            return res.status(400).send('Faltan datos');
        };
  
        const data = {
            DNI,
            nombre,
            domicilio,
            celular,
            obraSocial,
            fechaDeNacimiento
        };
        
        const newPaciente = await postPaciente(data);
        const dniPaciente = newPaciente.DNI;

        res.status(200).json(newPaciente);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
//------------------------Crear Turno------------------------//

const createTurno = async (req, res) => {
    try {
        const { estado, hora, fecha, notas, dniProfesional, dniPaciente  } = req.body;

        if (!( estado && hora && fecha && dniProfesional && dniPaciente)) {
            return res.status(400).send('Faltan datos');
        };
  
        const data = {
            estado,
            hora,
            fecha,
            notas,
            dniProfesional,
            dniPaciente
        };

        const newTurno = await postTurno(data);
        res.status(200).json(newTurno);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//------------------------Crear Usuario------------------------//

const createUsuario = async (req, res) => {
    try {
        const { clinica, nombre, email, rol  } = req.body;

        if (!( clinica && nombre && email && rol )) {
            return res.status(400).send('Faltan datos');
        };
  
        const data = {
            clinica,
            nombre,
            email,
            rol
        };

        const newUsuario = await postUsuario(data);
        res.status(200).json(newUsuario);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};




module.exports = {
    createProfesional,
    createPaciente,
    createTurno,
    createUsuario
}