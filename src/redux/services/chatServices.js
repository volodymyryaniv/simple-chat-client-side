import axios from 'axios';

export const getAnswer = async () => {
  try {
    const data = await axios.get('https://api.chucknorris.io/jokes/random');
    return data.data.value;
  } catch (error) {
    console.log(error.message);
  }
};
