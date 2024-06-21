import axios from "axios";

export const baseURL = "https://gominzipsession.o-r.kr";

export const getQuestion = async () => {
    try {
        const response = await axios.get(`${baseURL}/liontest/question`);
        return response.data;
    } catch (error) {
        console.error("Error fetching questions:", error);
        throw error;
    }
}

export const postResult = async (data) => {
    try {
        const response = await axios.post(`${baseURL}/liontest/result`, data);
        return response.data;
    } catch (error) {
        console.error("Error posting result:", error);
        throw error;
    }
}

export const getResult = async (correctCount) => {
    try {
        const response = await axios.get(`${baseURL}/liontest/result/${correctCount}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching result:", error);
        throw error;
    }
}

/*
export const getPartUser = async(part) => {
    const response = await axios.get(`${baseURL}/lionlist?part=${part}`);
    return response.data;
}
*/
