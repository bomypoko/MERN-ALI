import React from 'react'

import { useState, useEffect } from 'react'
import { Loader , Card , FormField } from '../components'


const RenderCard = ({data , title}) => {
  if(data?.length > 0 ) {
    return data.map((post) => <Card key={post._id} {...post}/>)
  }else {
    return <h2 className='mt-5 font-bolt text-[#6449ff] uppercase'>{title}</h2>
  }
}


const Home = () => {

  // Building a State 
  const [loading , setLoading ] = useState(false)
  const [allPosts , setAllPosts ] = useState(null)
  const [searchText, setSearchText] = useState('')

  return (
    <section className='bom1 max-w-7xl mx-auto'>

      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>The Comunity Showcase</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>Browse Through a Collection of imaginative and visually stunning images generated by AI</p>
      </div>

      <div className='mt-16 '>
        <FormField/>
      </div>
D
      <div className='mt-10'>
          {loading ? (
            <div className='flex justify-center items-center'>
              <Loader/>
            </div>
          ) : (
              <div>

                {searchText ? (
                  <RenderCard
                  data={[]}
                  title="No Search Results found"
                  />
                ) : (
                  <RenderCard
                  data={[]}
                  title="No Posts found"/>
                )}

              
              </div>
          )}
      </div>
    </section>
  )
}

export default Home