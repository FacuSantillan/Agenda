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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
        allowNull: false,
      },
      ProfesionalDNI: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      PacienteDNI: {
        type: DataTypes.STRING,
        allowNull: true,
      }
      
  });
};