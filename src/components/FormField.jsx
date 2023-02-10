import React from 'react'

const FormField = ({LabelName , type ,name , placeholder , value , handleChange , isSurpriseMe, handleSurpriseMe}) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2 bom1'>
        <label htmlFor={name}className="block text-sm font-medium text-gray-900">
          {LabelName}
          
        </label>
      </div>
    </div>
  )
}

export default FormField