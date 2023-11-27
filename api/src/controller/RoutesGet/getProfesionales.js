const { Profesional, Turno } = require('../../db')
const { Sequelize } = require("sequelize");

const getAllProfesional = async () => {

    const response = await Profesional.findAll({
        attributes: [
            'DNI',
            'nombre',
            'especialidad',
            'celular',
            'dias',
            'horas',
        ],

        include: {
            model: Turno,
            attributes: ['estado', 'hora', 'fecha', 'notas', 'ProfesionalDNI', 'PacienteDNI'],
        },
    });

    return response.map((res) => {
        return {
            DNI: res.dataValues.DNI,
            nombre: res.dataValues.nombre,
            especialidad: res.dataValues.especialidad,
            celular: res.dataValues.celular,
            dias: res.dataValues.dias,
            horas: res.dataValues.horas,
            Turno: res.dataValues.Turnos.map((turno) => { 
                return {
                    estado: turno.dataValues.estado,
                    hora: turno.dataValues.hora,
                    fecha: turno.dataValues.fecha,
                    notas: turno.dataValues.notas,
                    PacienteDNI: turno.dataValues.PacienteDNI
                };
            }),
        };
    });
};

module.exports = getAllProfesional;
