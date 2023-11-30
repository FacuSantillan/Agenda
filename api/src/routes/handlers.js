//Controllers Post
const postProfesional = require('../controller/RoutesPost/postProfesional');
const postPaciente = require('../controller/RoutesPost/postPaciente');
const postTurno = require('../controller/RoutesPost/postTurno');
const postUsuario = require('../controller/RoutesPost/postUsuario');

//Controllers Get
const getPacientes = require('../controller/RoutesGet/getPacientes');
const getProfesionales = require('../controller/RoutesGet/getProfesionales');
const getTurnos = require('../controller/RoutesGet/getTurnos');

//Controllers Put
const putPaciente = require('../controller/RoutesPut/putPaciente');
const putProfesional = require('../controller/RoutesPut/putProfesional');
const putTurno = require('../controller/RoutesPut/putTurno');

//Controllers Delete
const deletePaciente = require('../controller/RoutesDelete/deletePaciente');
const deleteProfesional = require('../controller/RoutesDelete/deleteProfesional');
const deleteTurno = require('../controller/RoutesDelete/deleteTurno');

const { Usuario } = require('../db')
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
        const { clinica, contraseña, email } = req.body;

        if (!(clinica && contraseña && email)) {
            return res.status(400).send('Faltan datos');
        };

        const usuarioExistente = await Usuario.findOne({
            where: {
                email: email,
            }
        });

        if (usuarioExistente) {
            return res.status(201).json({ message: 'El usuario ya existe' });
        }

        const newUsuario = await Usuario.create({
            clinica,
            contraseña,
            email
        });

        res.status(200).json(newUsuario);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
//------------------------Validar Usuario------------------------//
const loginUsuario = async (req, res) => {
    try {
        const { contraseña, email } = req.body;

        if (!(contraseña && email)) {
            return res.status(400).send('Faltan datos');
        };

        const usuarioExistente = await Usuario.findOne({
            where: {
                email: email,
            }
        });

        if (!usuarioExistente) {
            return res.status(201).json({ message: 'Usuario no encontrado' });
        }

        if (contraseña !== usuarioExistente.contraseña) {
            return res.status(202).json({ message: 'Contraseña incorrecta' });
        }

        res.status(200).json(usuarioExistente);

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

//------------------------Obtener Profesionales y sus turnos------------------------//
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

//------------------------Obtener turnos------------------------//
const getTurno = async(req, res) => {
    try {
        const response = await getTurnos();

        if(response.length){
            res.status(200).json(response); 
        } else {
            res.status(400).json('No hay turnos momentaneamente.');
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

//------------------------Modificar datos de Paciente------------------------//
const updatePaciente = async(req, res) =>{

try {
    const pacientes = await putPaciente(req);
    res.status(200).json(pacientes)

} catch (error) {
    res.status(500).json({ error: error.message });
}

};

//------------------------Modificar datos de Profesional------------------------//
const updateProfesional = async(req, res) =>{

    try {
        const profesional = await putProfesional(req);
        res.status(200).json(profesional)
    
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
    };

//------------------------Modificar datos de Turno------------------------//
const updateTurno = async(req, res) =>{

    try {
        const turno = await putTurno(req);
        res.status(200).json(turno)
    
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
    };
//------------------------Eliminar paciente------------------------//
const deletePacientes = async(req, res) =>{
    try {
        const paciente = await deletePaciente(req);
        res.status(200).json('Paciente eliminado correctamente.')
    
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
//------------------------Eliminar profesional------------------------//
const deleteProfesionals = async(req, res) =>{
    try {
        const profesional = await deleteProfesional(req);
        res.status(200).json('profesional eliminado correctamente.')
    
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
//------------------------Eliminar turno------------------------//
const deleteTurnos = async(req, res) =>{
    try {
        const turno = await deleteTurno(req);
        res.status(200).json('turno eliminado correctamente.')
    
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



module.exports = {
    createProfesional,
    createPaciente,
    createTurno,
    createUsuario,
    getPaciente,
    getProfesional,
    getTurno,
    updatePaciente,
    updateProfesional,
    updateTurno,
    deletePacientes,
    deleteProfesionals,
    deleteTurnos,
    loginUsuario
}