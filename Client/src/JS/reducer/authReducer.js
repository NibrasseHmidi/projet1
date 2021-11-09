import { LOGIN_USER_SUCCESS, AUTH_FAIL,REGISTER_USER_SUCCESS, SET_LOADING, LOGOUT, GET_AUTH_USER} from "../const/index";
const initialState = {
  user: null,
  token: null,
  isLoading: true,
  isAuth: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {...state, isloading:true}
    case LOGIN_USER_SUCCESS:
   
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        user: payload.user,
        token: payload.token,
      };
       case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        user: payload.user,
        token: payload.token,
      };
      case GET_AUTH_USER:
        return{
          ...state, 
        isLoading: false,
        isAuth: true,
        user: payload.user,

        }
case AUTH_FAIL:
  case LOGOUT:
  return{
    ...state,
    user: null,
  token: null,
  isLoading: false,
  isAuth: false,
  }
    default:
      return state;
  }
};