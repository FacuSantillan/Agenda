const { Usuario } = require('../../db');

const createUsuario = async (data, res) => {
    const { clinica, contraseña, email } = data

    if(email !== ''){
        const usuarioExistente = await Usuario.findOne({
            where: {
                email: email,
            }
        })
        if (usuarioExistente) {
            return 'existente';
        }
    }

    const newUsuario = await Usuario.create({
        clinica,
        contraseña,
        email
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