const { Usuario } = require('../../db');

const createUsuario = async (data, res) => {
    const { clinica, nombre, email } = data

    if(email !== ''){
        const usuario = await Usuario.findOne({
            where: {
                email: email,
            }
        })
        return res.status(400).send('Usuario existente.')
    }

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
        attributes: [ 'clinica', 'contraseña', 'email' ],
    });
    
    return result;
};

module.exports = createUsuario