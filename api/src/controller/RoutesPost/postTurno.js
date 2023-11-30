const { Turno } = require('../../db');

const createTurno = async (data) => {
    const { estado, hora, fecha, notas, ProfesionalDNI, PacienteDNI } = data

    const turnoExistente = await Turno.findOne({
        where: {
            fecha: fecha,
            hora: hora,
        },
    });

    if (turnoExistente) {
        return 'Ya existe un turno para esta fecha y hora';
    }

    const newTurno = await Turno.create({
        estado,
        hora,
        fecha,
        notas,
        ProfesionalDNI,
        PacienteDNI
    });

    const result = await Turno.findOne({
        where: {
            id: newTurno.id,
        },
        attributes: [ 'id', 'estado', 'hora', 'fecha', 'notas', 'ProfesionalDNI', 'PacienteDNI'],
    });
    
    return result;
};

module.exports = createTurno