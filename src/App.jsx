import React from 'react'

import { BrowserRouter , Link , Route , Router, Routes } from 'react-router-dom'
import { Home , CreatePost } from './pages'
import { logo } from './assets'

const App = () => {
  return (
    // Rounter Version 6
    <BrowserRouter>


       {/* Navigation Bar  */}
      <header className='bom1 w-full flex justify-between items-center bg-white sm:px-8 py-4 border-b border-b-[#e6ebf4] '>
          <Link to='/'>
            <img src={logo} alt="logo" className='w-28 object-contain' />
          </Link>

          <Link to='/create-post' className='font-inter font-medium bg-[#6569ff] text-white px-4 py-2 rounded-md'>
            Create
          </Link>
      </header>
      {/* End Navigation bar */}


      {/* Start Main  */}
      <main className='bom2 sm:p-8 py-8 px-4 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)] '>
      {/* Setting Router flow by using Routes and Route */}

       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/create-post' element={<CreatePost/>}/>
       </Routes>

      </main>

      




    </BrowserRouter>
  )
}

export default App