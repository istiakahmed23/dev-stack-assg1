
import { useEffect, useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import MainLayout from './components/MainLayout'
import Navbar from './components/Navbar'
import type { Technology } from './types'

function App() {

  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

   useEffect( () => {
    const fetchTechnologies = async () => {
      try {
        const res = await fetch("/data.json");
        if (!res.ok){
          throw new Error("Failed to fetch technologies");
        }

        const data: Technology[] = await res.json();
        setTechnologies(data);

      }catch (err){
        console.error( "Fetch Error:", err);
        setError("Failed to fetch technologies");

      }
      finally{
        setLoading(false);
      }
    }

    fetchTechnologies();

  },[]);

  if(loading){
    return <p> Loading Technologies...</p>
  }
  if(error){
    return <p>{error}</p>
  }

  return (
    <>
    <Navbar/>
    <Hero/>
    <MainLayout technologies={technologies}/>
    
      
    </>
  )
}

export default App
