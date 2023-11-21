const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('Profesional', {
    DNI: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    especialidad: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    celular:{
      type :DataTypes.STRING ,
      allowNull: false,
      unique: false,
    },
    dias:{
      type :DataTypes.STRING ,
      allowNull: false,
      unique: false,
    },
    horas:{
      type :DataTypes.STRING ,
      allowNull: false,
      unique: false,
    },
  });
};