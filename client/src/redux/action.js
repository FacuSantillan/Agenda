import axios from 'axios';
const URL = 'http://localhost:3001';

//------------------Creacion y exportacion de TYPES------------------//
export const CREATE_USUARIO = 'CREATE_USUARIO';
export const LOGIN_USUARIO = 'LOGIN_USUARIO';
export const GUARDAR_INFORMACION = 'GUARDAR_INFORMACION'
//---------------------------Actions------------------------------------//

//registrar usuario
export const createUsuario = (data) => {
    return async (dispatch) => {
        const response = await axios.post(`${URL}/postUsuario`, data);
        return dispatch({
            type: 'CREATE_USUARIO',
            payload: response,
        });
    };
};

//loguear usuario
export const loginUsuario = (data) => {
    return async (dispatch) => {
        const response = await axios.post(`${URL}/loginUsuario`, data);
        return dispatch({
            type: 'LOGIN_USUARIO',
            payload: response,
        });
    };
};

//informacion de login
export const guardarInformacion = (informacion) => {
    return {
        type: 'GUARDAR_INFORMACION',
        payload: informacion,
    };
};