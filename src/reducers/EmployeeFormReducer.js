import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE
} from '../actions/types';

const INIT_STATE = {
  name: '',
  phone: '',
  shift: 'Monday',
  loading: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload = { prop: 'name', value: 'Jane'}
      return { ...state, [action.payload.prop]: action.payload.value, loading: true };
      // same as following two lines
      // const newObj[action.payload.prop] =  action.payload.value;
      // return { ...state, newObj };
    case EMPLOYEE_CREATE:
      return INIT_STATE;
    default:
      return state;
  }
};
