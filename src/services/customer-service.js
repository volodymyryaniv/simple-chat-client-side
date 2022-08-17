import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/';

export const getList = async () =>  {
  try {
    const data = await axios.get('customer');
    return data;
  } catch (error) {
    return error.message;
  }
}

export const addNewNote = async() => {

}
