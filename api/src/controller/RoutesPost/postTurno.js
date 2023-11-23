const { Turno } = require('../../db');

const createTurno = async (data) => {
    const { estado, hora, fecha, notas, dniProfesional, dniPaciente } = data

    const newTurno = await Turno.create({
        estado,
        hora,
        fecha,
        notas,
        dniProfesional,
        dniPaciente
    });

    const result = await Turno.findOne({
        where: {
            id: newTurno.id,
        },
        attributes: [ 'id', 'estado', 'hora', 'fecha', 'notas', 'dniProfesional', 'dniPaciente'],
    });
    
    return result;
};

module.exports = createTurno