import types from '../consts.js';

export const toastReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADDTOAST: {
      return [
        ...state,
        {
          ...payload,
        },
      ];
    }
    case types.REMOVETOAST: {
      return state.filter((toast) => toast.id !== payload);
    }
    case types.SETAUTOCLOSE: {
      return state.map((toast) => {
        if (toast.id === payload) {
          toast.autoclose = false;
          return toast;
        }
        return toast;
      });
    }
    default:
      return state;
  }
};
