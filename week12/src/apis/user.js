import axios from "axios";
import { getAuthAxios } from "./authAxios";

const baseURL = `http://yangzzago.kro.kr:3000`;

export const signUp = async(id,pw,name,age) => {
    const result = await axios.post(`${baseURL}/signup`,{
        id,
        pw,
        name,
        age,
    });
    return result;
};

export const login = async(id,pw) => {
    const result = await axios.post(`${baseURL}/login`, {
        id,
        pw,
    });
    console.log(result.data);
    return result.data;
};

export const getMyPage = async() => {
    const authAxios = getAuthAxios(localStorage.getItem("access"));
    const result = authAxios.get("/mypage");
    return result.data;
};

export const getNewRefreshToken = async () => {
    try {
        const accessToken = localStorage.getItem("access");
        const refreshtoken = localStorage.getItem("refresh");

        const result = await axios.post(
            `${baseURL}/refresh`,
            {
                refreshtoken,
            },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return result.data;
    }catch (error) {
        alert("토큰이 만료되었습니다. 다시 로그인해주세요.");
    }
}