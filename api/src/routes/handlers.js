const postProfesional = require('../controller/RoutesPost/postProfesional');
const postPaciente = require('../controller/RoutesPost/postPaciente');
const postTurno = require('../controller/RoutesPost/postTurno');
const postUsuario = require('../controller/RoutesPost/postUsuario');

const getPacientes = require('../controller/RoutesGet/getPacientes');
const getProfesionales = require('../controller/RoutesGet/getProfesionales');
const getTurnos = require('../controller/RoutesGet/getTurnos');


//------------------------Crear Profesional------------------------//
const createProfesional = async (req, res) => {
    try {
        const { DNI, nombre, especialidad, celular, dia, hora } = req.body;
        const dias = JSON.stringify(dia);
        const horas = JSON.stringify(hora);

        if (!( DNI && nombre && especialidad && celular && dias && horas)) {
            return res.status(400).send('Faltan datos');
        };
  
        const data = {
            DNI, 
            nombre, 
            especialidad, 
            celular, 
            dias,
            horas
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
        const { estado, hora, fecha, notas, ProfesionalDNI, PacienteDNI  } = req.body;

        if (!( estado && hora && fecha && ProfesionalDNI && PacienteDNI)) {
            return res.status(400).send('Faltan datos');
        };
  
        const data = {
            estado,
            hora,
            fecha,
            notas,
            ProfesionalDNI,
            PacienteDNI
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

//------------------------Obtener Pacientes y sus turnos------------------------//
const getPaciente = async(req, res) => {
    try {
        const response = await getPacientes();

        if(response.length){
            res.status(200).json(response); 
        } else {
            res.status(400).json('No hay pacientes momentaneamente.');
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

//------------------------Obtener Pacientes y sus turnos------------------------//
const getProfesional = async(req, res) => {
    try {
        const response = await getProfesionales();
        response.forEach(item => {
            item.dias = JSON.parse(item.dias.replace(/\\/g, '').slice(1, -1));
            item.horas = JSON.parse(item.horas.replace(/\\/g, '').slice(1, -1)); 
          });
          
        if(response.length){
            res.status(200).json(response); 

        } else {
            res.status(400).json('No hay profesionales momentaneamente.'); 
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

//------------------------Obtener Pacientes y sus turnos------------------------//
const getTurno = async(req, res) => {
    try {
        const response = await getTurnos();

        if(response.length){
            res.status(200).json(response); 
        } else {
            res.status(400).json('No hay pacientes momentaneamente.');
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};



module.exports = {
    createProfesional,
    createPaciente,
    createTurno,
    createUsuario,
    getPaciente,
    getProfesional,
    getTurno
}