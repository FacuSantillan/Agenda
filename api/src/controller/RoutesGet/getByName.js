const getAllPacientes = require('./getPacientes')

const getClientByName = async(req) => {
    try {
        const name = req.query.name;
        const response = await getAllPacientes();
        
        if (!name) {
            return response;
        }

        let filter = response.filter((resp) =>
            resp.nombre.toLowerCase().includes(name.toLowerCase())
        );

        return filter.length
            ? filter
            : { error: `No existe un cliente que contenga ese nombre` };
    } catch (error) {
        return { error: error.message };
    }
};

module.exports = getClientByName
