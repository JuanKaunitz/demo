import axios from 'axios';
import { SET_USERS } from './actionsNames';

export function getAllUsers() {
    return (dispatch) => {
      axios.get('http://localhost:3001/users')
      .then(response => {
          dispatch({ type: SET_USERS, payload: response.data })
      })
    }
}