const { Profesional } = require('../../db')

const putProfesional = async (req, res) => {
const newData = req.body; 
const { dni } = req.params;

        const profesional = await Profesional.findOne({ where: { DNI: dni } });
        if (!profesional) {
            res.status(404).json({ error: 'Profesional no encontrado.' });
        }
        await profesional.update(newData);
        return profesional
};

module.exports = putProfesional;
