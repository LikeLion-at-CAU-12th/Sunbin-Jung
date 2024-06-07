import axios from "axios";

export const baseURL = "https://gominzipsession.o-r.kr";

export const getQuestion = async() => {
    const response = await axios.get(`${baseURL}/liontest/question`);
    return response.data;
}

export const postResult = async() => {
    const response = await axios.get(`${baseURL}/liontesst/result}`);
    return response.data;
}

export const getResult = async(corretCount) => {
    const response = await axios.get(`${baseURL}/liontesst/result/${corretCount}}`);
    return response.data;
}

/*
export const getPartUser = async(part) => {
    const response = await axios.get(`${baseURL}/lionlist?part=${part}`);
    return response.data;
}
*/