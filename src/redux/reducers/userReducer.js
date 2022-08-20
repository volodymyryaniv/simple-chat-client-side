import types from '../consts.js';

const defaultPhoto = '/icons/profile/default-profile-icon.jpg';

const initialState = {
  user: {
    name: '',
    photo: defaultPhoto,
  },
  token: null,
  openPopup: true,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN: {
      return {
        ...state,
        user: payload.user,
        token: payload.token,
        openPopup: false,
      };
    }
    case types.LOGOUT: {
      return {
        ...state,
        user: {
          name: '',
          photo: defaultPhoto,
        },
        token: null,
      };
    }
    case types.SETPOPUP: {
      return {
        ...state,
        openPopup: payload,
      };
    }
    default:
      return state;
  }
};
