const { Turno } = require('../db');

const createTurno = async (data) => {
    const { DNI, nombre, domicilio, celular, obraSocial, fechaDeNacimiento } = data

    const newTurno = await Turno.create({
        DNI,
        nombre,
        domicilio,
        celular,
        obraSocial,
        fechaDeNacimiento
    });

    const result = await Turno.findOne({
        where: {
            DNI: newTurno.DNI,
        },
        attributes: [ 'DNI', 'nombre', 'domicilio', 'celular', 'obraSocial', 'fechaDeNacimiento'],
    });
    
    return result;
};

module.exports = createTurno