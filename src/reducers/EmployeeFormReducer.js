import {
  EMPLOYEE_UPDATE
} from '../actions/types';

const INIT_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload = { prop: 'name', value: 'Jane'}
      return { ...state, [action.payload.prop]: action.payload.value };
      // same as following two lines
      // const newObj[action.payload.prop] =  action.payload.value;
      // return { ...state, newObj };
    default:
      return state;
  }
};
