const { Profesional } = require('../db');

const createProfesional = async (data) => {
    const { DNI, nombre, especialidad, celular, dias, horas } = data

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