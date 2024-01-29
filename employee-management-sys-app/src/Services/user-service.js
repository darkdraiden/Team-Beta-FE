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
    const token=localStorage.getItem("token");
    const response = await axios.post('http://localhost:8080/member/login', userData);
    console.log(response);
    
    return response.data;
  } catch (error) {
    throw error;
  }
};
export { signup , loginf};
