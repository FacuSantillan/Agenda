//---------------------importacion de los types--------------------------------//
import {CREATE_USUARIO,
        LOGIN_USUARIO,
        GUARDAR_INFORMACION,
        ERROR_LOGIN,
        LOAD_PACIENTES,
        GET_CLIENT_NAME} from "./action";

//---------------------Estados iniciales--------------------------------//
const initialState = {
    allData:[],
    usuario:[],
    token:[],
    informacion:[],
    error:[],
    pacientes:[],
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
                  case LOAD_PACIENTES:
                    return {
                      ...state,
                        pacientes: action.payload,
                      };
                      case GET_CLIENT_NAME:
                        return {
                          ...state,
                          pacientes: action.payload,
                        };
        default:
        return state;
      }
    };
export default reducer;
