import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import {preview} from '../assets'
import { getRandomPrompt } from '../utils'
import { Loader , FormField } from '../components'

const CreatePost = () => {

  const navigate = useNavigate();

  const handleSubmit = () => {
    
  }

  const handleChange = (e) => {
    e.target.value
  }

  const handleSurpriseMe = () => {

  }

  const [form , setForm] = useState({
    name:'',
    prompt:'',
    photo:'',
  });

  const [generatingImg , setGeneratingImg] = useState(false);
  const [loading , setLoading ] = useState(false)

  

  return (
    <section className='max-w-7xl mx-auto'>
       <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>Create</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>Create imaginative and visually stunning images Through Ai and Share them with the community</p>
      </div>

      <form className='mt-16 max-w-3xl'onSubmit={handleSubmit}>
        
        <div className='flex flex-col gap-5'>
          <FormField
          LabelName="Your Name"
          type="text"
          name="name"
          placeholder="Ratchasri Kidking"
          value={form.name}
          handleChange={handleChange}/>

          <FormField
          LabelName="Prompt"
          type="text"
          name="prompt"
          placeholder="teddy bears shopping for groceries in Japan, ukiyo-e"
          value={form.prompt}
          handleChange={handleChange}
          isSurpriseMe
          handleSurpriseMe={handleSurpriseMe}/>


        </div>

      </form>

    </section>
  )
}

export default CreatePost