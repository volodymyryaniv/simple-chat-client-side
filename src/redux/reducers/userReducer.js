import types from '../consts.js';

const initialState = {
  user: {
    name: 'John',
    photo: '/icons/profile/default-profile-icon.jpg',
  },
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
