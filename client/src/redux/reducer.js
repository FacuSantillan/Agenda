//---------------------importacion de los types--------------------------------//
import {CREATE_USUARIO,
        LOGIN_USUARIO,
        GUARDAR_INFORMACION} from "./action";

//---------------------Estados iniciales--------------------------------//
const initialState = {
    allData:[],
    usuario:[],
    informacion:[]
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
            };
            case GUARDAR_INFORMACION:
              return {
                ...state,
                informacion: action.payload
              };
              
        default:
        return state;
      }
    };

export default reducer;
