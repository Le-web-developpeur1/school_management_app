import axios from "axios";

const API_URL = "http://localhost:3000/api";

const login = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
};

const register = async (username: string, email: string, password: string) => {
    const response = await axios.post(`${API_URL}/register`, { username, email, password });
    return response.data;
};

export default { login, register };
