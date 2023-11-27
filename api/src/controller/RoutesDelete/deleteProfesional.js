const { Profesional } = require('../../db');

const deleteProfesional = async (req, res) => {
    const { dni } = req.params;

        const profesional = await Profesional.findOne({
            where: {
                DNI: dni
            }
        });
        
        if (!profesional) {
            return res.status(404).json({ message: 'Paciente no encontrado' });
        }

    await profesional.destroy();
};

module.exports = deleteProfesional

