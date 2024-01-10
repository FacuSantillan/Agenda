const { Paciente } = require('../../db');

const createPaciente = async (data) => {
    const { DNI, nombre, domicilio, celular, obraSocial, fechaDeNacimiento } = data

    const pacienteExistente = await Paciente.findOne({
        where: {
            DNI: DNI,
        },
    });

    if (pacienteExistente) {
        return 'Ya existe un paciente con este DNI'; 
    }

    const newPaciente = await Paciente.create({
        DNI,
        nombre,
        domicilio,
        celular,
        obraSocial,
        fechaDeNacimiento,
    });

    const result = await Paciente.findOne({
        where: {
            DNI: newPaciente.DNI,
        },
        attributes: [ 'DNI', 'nombre', 'domicilio', 'celular', 'obraSocial', 'fechaDeNacimiento'],
    });
    
    return result;
};

module.exports = createPaciente