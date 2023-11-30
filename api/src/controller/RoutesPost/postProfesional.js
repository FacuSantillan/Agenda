const { Profesional } = require('../../db');

const createProfesional = async (data) => {
    const { DNI, nombre, especialidad, celular, dias, horas } = data

    const profesionalExistente = await Profesional.findOne({
        where: {
            DNI: DNI,
        },
    });

    if (profesionalExistente) {
        return 'Ya existe un profesional con este DNI'; 
    };

    const newProfesional = await Profesional.create({
        DNI,
        nombre,
        especialidad,
        celular,
        dias,
        horas
    });

    const result = await Profesional.findOne({
        where: {
            DNI: newProfesional.DNI,
        },
        attributes: [ 'DNI', 'nombre', 'especialidad', 'celular', 'dias', 'horas'],
    });
    return result;
};

module.exports = createProfesional