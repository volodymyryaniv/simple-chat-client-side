import types from '../consts';

export const login = (name, photo, token) => {
  return {
    type: types.LOGIN,
    payload: {
      user: {
        name,
        photo,
      },
      token,
    },
  };
};

export const setPopup = (value) => {
  return {
    type: types.SETPOPUP,
    payload: value,
  };
};

export const logOut = () => {
  return {
    type: types.LOGOUT,
  };
};
