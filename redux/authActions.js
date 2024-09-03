import { SIGN_UP, SIGN_IN, SIGN_OUT } from '../redux/actionTypes'

export const signUp = (username, password) => {
  return {
    type: SIGN_UP,
    payload: { username, password },
  };
};

export const signIn = (username, password) => {
  return {
    type: SIGN_IN,
    payload: { username, password },
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
