import { useState } from 'react'
import { Button } from "@/components/ui/button"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import BlogCard from './components/BlogCard'
import Result from './components/Result'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <SearchBar />
    <Result />
    </>
  )
}

export default App
