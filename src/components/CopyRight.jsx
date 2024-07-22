import React from 'react'

const CopyRight = () => {
  return (
    <div className='text-center font-semibold my-2 text-sm md:text-lg'>
      <p>©{new Date().getFullYear()} Domain Analyzer. All Rights Reserved</p>
    </div>
  )
}

export default CopyRight
