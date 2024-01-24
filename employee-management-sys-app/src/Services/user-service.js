import axios from 'axios';

const signup = async (userData) => {
  try {
    const response = await axios.post('http://localhost:8080/member/add-member', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};



const loginf = async (userData) => {
  try {
    const response = await axios.post('http://localhost:8080/member/login', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export { signup , loginf};

// const  = async (id) => {
//   try {
//     const response = await axios.get('http://localhost:8080/member/login', id);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
// export { signup , loginf,};
