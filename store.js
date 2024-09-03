import { createStore } from 'redux';
import { authReducer } from './redux/authReducer';

export const store = createStore(authReducer);
