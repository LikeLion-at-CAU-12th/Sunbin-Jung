import React, { useEffect } from 'react'
import { postResult } from '../apis/apis';

const Evaluate = ()  => {

    useEffect(()=> {
        const fetchData = async () => {
        const response = await postResult();
        postResult(response.answerBody);
        };
    
        fetchData();
     },[])

  return (
    <div></div>
  )
}


export default Evaluate