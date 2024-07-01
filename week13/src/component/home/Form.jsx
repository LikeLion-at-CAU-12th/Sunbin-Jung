import React from 'react'
import { useRecoilState } from 'recoil'
import { emailAtom, userNameAtom } from '../../recoil/atom'

const Form = ({type, inputType}) => {
    const [userName,setUserName] = useRecoilState(userNameAtom);
    const [email,setEmail] = useRecoilState(emailAtom);

    const onChange = (e)=>{
        const value = e.target.value;
        if(inputType === '이름'){
            setUserName(value);
        }else{
            setEmail(value);
        }
    }; //얘로 코드 재사용을 할 수 있는 거야

  return (
    <>
    <div>{inputType}</div>
    <input type={type} onChange={onChange}/>
    </>
  )
}

export default Form