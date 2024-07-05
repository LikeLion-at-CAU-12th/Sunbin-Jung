import { atom } from "recoil";

export const userNameAtom = atom({
    key : 'userName',
    default : "홍길동",
});

export const emailAtom = atom({
    key : 'email',
    default : "likelion@cau.ac.kr",
});

export const luckyItemAtom = atom({
    key : 'luckyitem',
    default : "💸"
})

export const isSubmitedAtom = atom({
    key : 'isSubmited',
    default : false,
});