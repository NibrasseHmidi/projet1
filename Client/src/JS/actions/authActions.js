import { LOGIN_USER_SUCCESS, AUTH_FAIL,REGISTER_USER_SUCCESS,LOGOUT,GET_AUTH_USER  } from "../const";
 import axios from "axios";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
     toast.configure();
   

 //getauthuser
 export const getAuthUser =()  => async (dispatch) => {
const config = {
      headres: {
       Authorization: localStorage.getItem("token"),
       "content-type": "application/json",
      },
    };
    console.log(config);
 try {
    const res = await axios.get("/auth/profil", config);
console.log(res.data);
    dispatch({
      type: GET_AUTH_USER,
      payload: res.data,
    })
    
  } catch (error) {
    dispatch({
      type: AUTH_FAIL,
    
    });
  }
  
 }   

//login
export const login = (email, password) => async (dispatch) => {
  try {
    const config = {
      headres: {
        "content-type": "application/json",
      },
    };
    let { data } = await axios.post("/auth/login", { email, password }, config);
    localStorage.setItem("token", data.token)
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: data, // email password
    });
  } catch (error) {
    console.dir(error);

    error.response.data.forEach((elt) => {
      toast.error(elt.msg);
    });
  
    
    dispatch({
      type: AUTH_FAIL,

    });
  }
};

//logout


export const logout = () => async (dispatch) => {
  localStorage.removeItem("user");
  dispatch({ type: LOGOUT });
};


//register

export const register = (name,lastname,email,password,pic) => async (dispatch) => {

try {
  const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    let { data } = await axios.post("/auth/register", { name, lastname, email, password , pic}, config
    );
    dispatch({
      type: REGISTER_USER_SUCCESS ,
      payload: data, // name , pic ,email, password
    });
} catch (error) {
  error.response.data.forEach((elt) => {
      toast.error(elt.msg);
    });
  
    
    dispatch({
      type: AUTH_FAIL,
      payload:error.response.data.msg,
    });
}


}