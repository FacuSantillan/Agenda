const { Turno } = require('../../db')

const getAllTurnos = async () => {

    const response = await Turno.findAll({
        attributes: [
            'estado', 
            'hora', 
            'fecha', 
            'notas', 
            'ProfesionalDNI', 
            'PacienteDNI'
        ],
    });

    return response.map((res) => {
        return {
            id: res.dataValues.id,
            estado: res.dataValues.estado,
            hora: res.dataValues.hora,
            fecha: res.dataValues.fecha,
            notas: res.dataValues.notas,
            ProfesionalDNI: res.dataValues.ProfesionalDNI,
            PacienteDNI: res.dataValues.PacienteDNI
        };
    });
};

module.exports = getAllTurnos;
