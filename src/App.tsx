
import { useEffect, useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import MainLayout from './components/MainLayout'
import Navbar from './components/Navbar'
import type { Technology } from './types'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Footer from './components/Footer'
import NavbarTwo from './components/NavbarTwo'

function App() {

  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [stack, setStack] = useState<Technology[]>([]);

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

  // Adding a technology to the stack
  const handleAddToStack = (tech: Technology) => {
    // Check if the technology is already in the stack
    const alreadyAdded = stack.some((item) => item.id === tech.id);
    if (alreadyAdded) {
      // Show a toast notification for already added technology
     toast.warning(`${tech.name} is already in your stack!`);
     return;
    }
    // Otherwise add the technology to the stack
    setStack((prevStack => [...prevStack, tech]));

    toast.success(`${tech.name} added to your stack!`);

  }

  // Removing a technology from the stack
  const handleRemoveFromStack = (id : number) =>{
    setStack((prevStack) => 
      prevStack.filter((item) => item.id !== id)
  );
    toast.info("Technology removed from your stack!");

  }

  // Removing all technologies from the stack
  const handleRemoveAll = () => {
    if(stack.length === 0){
      toast.warning("Your stack is already empty!");
      return;
    }
    
    setStack([]);
    toast.info("All technologies removed from your stack!");
  }

  return (
    <>
    <NavbarTwo />
    <Hero/>
    <MainLayout 
    technologies={technologies}
    stack={stack}
    onAdd={handleAddToStack}
    onRemove={handleRemoveFromStack}
    onRemoveAll={handleRemoveAll}
    />

    <Footer />


    {/* keeping Toast container inside App.tsx/main.tsx */}
    <ToastContainer position="top-right"/>

      
    </>
  )
}

export default App
