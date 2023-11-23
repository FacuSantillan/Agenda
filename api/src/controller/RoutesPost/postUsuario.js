const { Usuario } = require('../../db');

const createUsuario = async (data) => {
    const { clinica, nombre, email, rol } = data

    const newUsuario = await Usuario.create({
        clinica,
        nombre,
        email,
        rol
    });

    const result = await Usuario.findOne({
        where: {
            id: newUsuario.id,
        },
        attributes: [  'clinica', 'nombre', 'email', 'rol' ],
    });
    
    return result;
};

module.exports = createUsuario