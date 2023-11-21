import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Component/Pages/HomePage'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
        </Routes>
    </div>
  )
}

export default Router