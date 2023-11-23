const { Paciente, Turno } = require('../../db')
const { Sequelize } = require("sequelize");

const getAllReservas = async () => {
    const response = await Paciente.findAll({
        attributes: [
            'DNI',
            'nombre',
            'domicilio',
            'celular',
            'obraSocial',
            'fechaDeNacimiento',
        ],
        include: {
            model: Turno,
            where: { dniPaciente: Sequelize.col('Paciente.DNI') }, // Filtrar por el DNI del paciente
            attributes: ['estado', 'hora', 'fecha', 'notas', 'dniProfesional'],
        },
    });

    return response.map((res) => {
        return {
            DNI: res.dataValues.DNI,
            nombre: res.dataValues.nombre,
            domicilio: res.dataValues.domicilio,
            celular: res.dataValues.celular,
            obraSocial: res.dataValues.obraSocial,
            fechaDeNacimiento: res.dataValues.fechaDeNacimiento,
            turnos: res.dataValues.Turnos.map((turno) => {
                return {
                    estado: turno.estado,
                    hora: turno.hora,
                    fecha: turno.fecha,
                    notas: turno.notas,
                    dniProfesional: turno.dniProfesional
                };
            }),
        };
    });
};

module.exports = getAllReservas;
