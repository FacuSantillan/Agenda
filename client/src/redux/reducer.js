//---------------------importacion de los types--------------------------------//
import {CREATE_USUARIO,
        LOGIN_USUARIO,
        GUARDAR_INFORMACION,
        ERROR_LOGIN} from "./action";

//---------------------Estados iniciales--------------------------------//
const initialState = {
    allData:[],
    usuario:[],
    token:[],
    informacion:[],
    error:[],
};

function reducer(state = initialState, action) {
  
switch (action.type) {
    case CREATE_USUARIO:
      return {
        ...state,
          usuario: action.payload,
        };
        case LOGIN_USUARIO:
          return {
            ...state,
            usuario: action.payload,
            token: action.payload.data.token,
            };
            case GUARDAR_INFORMACION:
              return {
                ...state,
                informacion: action.payload
              };
              case ERROR_LOGIN:
                return {
                  ...state,
                    error: action.payload,
                  };
              
        default:
        return state;
      }
    };
export default reducer;
