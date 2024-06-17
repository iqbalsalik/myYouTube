import React from 'react'

const ButtonContainer = () => {
    const buttonList = ["All","News","Music","Live","Live Television","javaScript","Debate","Pop Music","Test","Seminar","Election","Indian Pop Musci","Data type"]
  return (
    <div>
        {buttonList.map(btn=>{
           return <button key={btn} className='bg-gray-400 p-2 m-2 rounded-lg'>{btn}</button>
        })}
    </div>
  )
}

export default ButtonContainer;