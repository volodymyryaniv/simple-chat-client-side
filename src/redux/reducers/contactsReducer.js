import { v4 } from 'uuid';
import types from '../consts.js';

const initialState = {
  contacts: [
    {
      id: '1',
      name: 'Alice Freeman',
      photo: '/icons/profile/alice.jpg',
      dialogue: [
        {
          id: v4(),
          sender: 'partner',
          message: 'Hi,how are you?',
          date: '8/17/2022, 7:43:07 AM',
        },
        {
          id: v4(),
          sender: 'user',
          message: 'Not bad. What about you?',
          date: '8/17/2022, 7:45:07 AM',
        },
        {
          id: v4(),
          sender: 'user',
          message: 'How was your meeting?',
          date: '8/17/2022, 7:48:07 AM',
        },
      ],
    },
    {
      id: '2',
      name: 'Josefina',
      photo: '/icons/profile/josefina.jpg',
      dialogue: [
        {
          id: v4(),
          sender: 'partner',
          message: 'Hi! Are you going to watch football tonight?',
          date: '8/15/2022, 8:43:07 AM',
        },
        {
          id: v4(),
          sender: 'user',
          message: 'Hi! No, I am going for a walk.',
          date: '8/16/2022, 4:50:07 AM',
        },
      ],
    },
    {
      id: '3',
      name: 'Velazquez',
      photo: '/icons/profile/velazquez.jpg',
      dialogue: [
        {
          id: v4(),
          sender: 'partner',
          message: 'Hi, how are you',
          date: '8/12/2022, 2:40:07 PM',
        },
        {
          id: v4(),
          sender: 'user',
          message: 'Hi! I am a little sad , tell me a joke please.',
          date: '8/14/2022, 4:40:07 PM',
        },
      ],
    },
    {
      id: '4',
      name: 'Piter',
      photo: '/icons/profile/piter.jpg',
      dialogue: [],
    },
  ],
  openedChat: null,
};

export const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GETLIST: {
      return state;
    }
    case types.SETLIST: {
      return {
        ...state,
        contacts: payload,
      };
    }
    case types.GETBYID: {
      const user = state.contacts.find((contact) => contact.id === payload);
      return {
        ...state,
        openedChat: user,
      };
    }
    case types.ADDMESSAGE: {
      const updatedDialogue = state.contacts.map((contact) => {
        if (contact.id === payload.id) {
          contact.dialogue = [
            ...contact.dialogue,
            {
              id: v4(),
              sender: payload.sender,
              message: payload.message,
              date: new Date().toLocaleString('en-US'),
            },
          ];
          return contact;
        } else {
          return contact;
        }
      });
      return {
        ...state,
        contacts: updatedDialogue,
      };
    }
    case types.MOVEUPCHAT: {
      const chat = state.contacts.find((contact) => contact.id === payload);
      const updatedList = [].concat(
        chat,
        state.contacts.filter((contact) => contact.id !== payload)
      );
      return {
        ...state,
        contacts: updatedList,
      };
    }
    default:
      return state;
  }
};
