const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Usuario', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      clinica: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contraseña:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      email:{
        type: DataTypes.STRING,
        allowNull: false,
      },
  });
};