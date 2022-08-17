import types from '../consts.js';

export const showToast = (message) => {
  return {
    type: types.ADDTOAST,
    payload: message,
  };
};

export const removeToast = (id) => {
  return {
    type: types.REMOVETOAST,
    payload: id,
  };
};

export const setAutoClose = (id) => {
  return {
    type: types.SETAUTOCLOSE,
    payload: id,
  };
};
