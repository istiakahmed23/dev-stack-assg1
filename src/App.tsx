
import { Suspense } from 'react'
import './App.css'
import Hero from './components/Hero'
import MainLayout from './components/MainLayout'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Suspense fallback={<div className="bg-slate-50 px-4 py-16 text-center text-slate-600">Loading Products...</div>}>
    <MainLayout/>
    </Suspense>
    
      
    </>
  )
}

export default App
