import React, { useState } from 'react'

const Results = ({formData, datesReference, outputData}) => {

  const {currenttDay, currentMonth, currentYear} = datesReference
  const {userDay, userMonth, userYear} = formData
  const {outputDay, outputMonth, outputYear} = outputData

  const defaultDay = ()=> {
    if(userDay > currenttDay) {
      return <span className='text-red-500'>Err</span>
    } else if(!userDay){
      return "--"
    } else {
      return userDay
    }
  }



  return (
    <ul className='text-4xl'>
        <li><span className='text-violet-500'>{outputYear || "--"}</span>years</li>
        <li><span className='text-violet-500'>{outputMonth || "--"}</span>months</li>
        <li><span className='text-violet-500'>{outputDay || "--"}</span>days</li>
    </ul>
  )
}

export default Results