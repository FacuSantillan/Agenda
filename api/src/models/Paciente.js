const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('Paciente', {
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
    domicilio: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    celular:{
      type :DataTypes.STRING ,
      allowNull: false,
      unique: false,
    },
    obraSocial:{
      type :DataTypes.STRING ,
      allowNull: true,
      unique: false,
    },
    fechaDeNacimiento:{
      type :DataTypes.STRING ,
      allowNull: true,
      unique: false,
    },
    correoElectronico:{
      type :DataTypes.STRING ,
      allowNull: true,
      unique: false,
    },
    Edad:{
      type :DataTypes.STRING ,
      allowNull: true,
      unique: false,
    },
    CUIL:{
      type :DataTypes.STRING ,
      allowNull: true,
      unique: false,
    },
  });
};