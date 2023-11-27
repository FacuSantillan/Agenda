const { Turno } = require('../../db');

const createTurno = async (data) => {
    const { estado, hora, fecha, notas, ProfesionalDNI, PacienteDNI } = data

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