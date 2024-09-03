import { SIGN_UP, SIGN_IN, SIGN_OUT } from '../redux/actionTypes';

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
  user: JSON.parse(localStorage.getItem('currentUser')) || null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      const { username, password } = action.payload;
      localStorage.setItem(username, JSON.stringify({ username, password }));
      localStorage.setItem('currentUser', JSON.stringify({ username }));
      localStorage.setItem('isLoggedIn', 'true');
      return {
        ...state,
        isLoggedIn: true,
        user: { username },
      };

    case SIGN_IN:
      const storedUser = JSON.parse(localStorage.getItem(action.payload.username));
      if (storedUser && storedUser.password === action.payload.password) {
        localStorage.setItem('currentUser', JSON.stringify({ username: action.payload.username }));
        localStorage.setItem('isLoggedIn', 'true');
        return {
          ...state,
          isLoggedIn: true,
          user: { username: action.payload.username },
        };
      } else {
        alert('Invalid username or password');
        return state;
      }

    case SIGN_OUT:
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('currentUser');
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    default:
      return state;
  }
};
