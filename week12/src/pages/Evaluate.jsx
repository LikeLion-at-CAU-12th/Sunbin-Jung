import React, { useEffect, useState } from 'react'
import { postResult } from '../apis/apis';
import Result from './Result';

const Evaluate = ({answers})  => {
    const [correctCount, setCorrectCount] = useState(null);

    useEffect(()=> {
        const fetchData = async () => {
            const result = await postResult(answers);
            setCorrectCount(result.correctCount);
        };
    
        fetchData();
     },[answers]);

  return (
    <>
    {correctCount !== null && <Result correctCount={correctCount} />}
    </>
  )
}


export default Evaluate