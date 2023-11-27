const { Paciente } = require('../../db')

const putPaciente = async (req, res) => {
const newData = req.body; 
const { dni } = req.params;

        const paciente = await Paciente.findOne({ where: { DNI: dni } });
        if (!paciente) {
            res.status(404).json({ error: 'Paciente no encontrado.' });
        }
        await paciente.update(newData);
        return paciente
};

module.exports = putPaciente;
