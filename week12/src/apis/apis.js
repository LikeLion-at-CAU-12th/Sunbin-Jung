import axios from "axios";

export const baseURL = "https://gominzipsession.o-r.kr";

export const getQuestion = async() => {
    const response = await axios.get(`${baseURL}/liontest/question`);
    return response.data;
}

export const postResult = async() => {
    const response = await axios.post(`${baseURL}/liontest/result`);
    return response.data;
}

export const getResult = async(correctCount) => {
    const response = await axios.get(`${baseURL}/liontest/result/${correctCount}}`);
    return response.data;
}

/*
export const getPartUser = async(part) => {
    const response = await axios.get(`${baseURL}/lionlist?part=${part}`);
    return response.data;
}
*/