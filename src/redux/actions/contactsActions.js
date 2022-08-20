import { v4 } from 'uuid';
import types from '../consts';
import { getAnswer } from '../services/chatServices';
import { showToast } from './toastActions';

export const getList = () => {
  return {
    type: types.GETLIST,
  };
};

export const setList = (list) => {
  return {
    type: types.SETLIST,
    payload: list,
  };
};

export const getContactById = (id) => {
  return {
    type: types.GETBYID,
    payload: id,
  };
};

export const addMessage = (id, message, sender) => {
  return {
    type: types.ADDMESSAGE,
    payload: {
      id,
      message,
      sender,
    },
  };
};

const moveUpRecentChat = (id) => {
  return {
    type: types.MOVEUPCHAT,
    payload: id,
  };
};

export const sendAnswer = (id, name, src) => async (dispatch, getState) => {
  try {
    const answer = await getAnswer();
    setTimeout(() => {
      dispatch(addMessage(id, answer, 'partner'));
      dispatch(moveUpRecentChat(id));
      dispatch(
        showToast({
          status: 'success',
          name: name,
          src: src,
          message: answer,
          autoclose: true,
          id: v4(),
        })
      );
      const updatedContacts = getState().contactsReducer.contacts;
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    }, 10000);
  } catch (error) {
    console.log(error);
  }
};
