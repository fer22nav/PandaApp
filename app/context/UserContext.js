import React, {createContext, useReducer} from 'react';
import {saveUser, deleteUser} from '@storage/UserAsyncStorage';
import Snackbar from 'react-native-snackbar';

const initialState = {
  user: {
    userName: '',
    email: '',
    password: '',
  },
  active: false,
};

const userReducer = (state = initialState, payload) => {
  //recupera la informacion e las acciones
  switch (payload.type) {
    case 'sing-in':
      console.log('Bienvenido al sistema');
      return {...state, user: payload.data, active: true};
    case 'sign':
      saveUser(payload.data).then((msg) => {
        console.log('Usuario guardado');
      });
      Snackbar.show({
        text: 'Inicio de sesion exitoso ',
        duration: Snackbar.LENGTH_LONG,
      });
      return {...state, user: payload.data, active: true};
    case 'sign-out':
      deleteUser().then((msg) => {
        console.log(msg);
      });
      Snackbar.show({
        text: 'Sesión expirada ',
        duration: Snackbar.LENGTH_LONG,
      });
      return {...state, user: payload.data, active: false};
    default:
      return state;
  }
};
const UserContext = createContext(initialState);

function UserProvider(props) {
  const [login, loginAction] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={[login, loginAction]}>
      {props.children}
    </UserContext.Provider>
  );
}
export {UserContext, UserProvider};
