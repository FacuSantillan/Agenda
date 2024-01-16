import axios from 'axios';

//------------------Creacion y exportacion de TYPES------------------//
export const CREATE_USUARIO = 'CREATE_USUARIO';
export const LOGIN_USUARIO = 'LOGIN_USUARIO';
export const GUARDAR_INFORMACION = 'GUARDAR_INFORMACION'
export const ERROR_LOGIN = "ERROR_LOGIN"
export const LOAD_PACIENTES = "LOAD_PACIENTES"
export const GET_CLIENT_NAME = 'GET_CLIENT_NAME'
//---------------------------Actions------------------------------------//

//registrar usuario
export const createUsuario = (data) => {
    return async (dispatch) => {
        const response = await axios.post(`/postUsuario`, data);
        return dispatch({
            type: 'CREATE_USUARIO',
            payload: response,
        });
    };
};

//loguear usuario
export const loginUsuario = (data) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`/loginUsuario`, data);
            return dispatch({
                type: 'LOGIN_USUARIO',
                payload: response, 
            });
        } catch (error) {
           console.log(error)
        }
    };
};

//informacion de login
export const guardarInformacion = (informacion) => {
    return {
        type: 'GUARDAR_INFORMACION',
        payload: informacion,
    };
};

//todos los pacientes 
export const loadPacientes = (data) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`/getpacientes`, data);
            console.log(response)
            return dispatch({
                type: 'LOAD_PACIENTES',
                payload: response.data,
            });    
        } catch (error) {
            
        }
    };
}

//buscar pacientes
export function getPacienteName (date) {
    return async function (dispatch) {
      try {
        const response = await axios.get(`/getName?name=${date}`);
        return dispatch({
          type: 'GET_CLIENT_NAME',
          payload: response.data,
        });
      } catch (error) {

    }};
  }