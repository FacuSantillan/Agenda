const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('Turno', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      estado: {
        type: DataTypes.ENUM('pendiente', 'confirmado', 'cancelado'),
        allowNull: false,
      },
      hora:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      notas: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      dniProfesional: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dniPaciente: {
        type: DataTypes.STRING,
        allowNull: true,
      }
  });
};