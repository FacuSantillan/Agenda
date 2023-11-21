const postProfesional = require('../controller/postProfesional');
const postPaciente = require('../controller/postPaciente');

//------------------------Crear Profesional------------------------//

const createProfesional = async (req, res) => {
    try {
        const { DNI, nombre, especialidad, celular, dias, horas } = req.body;

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
        res.status(200).json(newPaciente);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};






module.exports = {
    createProfesional,
    createPaciente
}