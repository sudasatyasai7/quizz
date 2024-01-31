import React from 'react'

const display = ({que,index,event}) => {
    const submit=(e)=>{
        let temp=que.answer===e.target.value?1:0;
        event(temp,index);
    }
  return (
    <div className='alignleft'>
      <h3>{que.title}</h3>
      <div onClick={submit}>
      <input type='radio' value='A' name={index}/>{que.options[0]} &nbsp;
      <input type='radio' value='B' name={index}/>{que.options[1]} &nbsp;
      <input type='radio' value='C' name={index}/>{que.options[2]} &nbsp;
      <input type='radio' value='D' name={index}/>{que.options[3]} &nbsp;
      </div>
    </div>
  )
}

export default display
