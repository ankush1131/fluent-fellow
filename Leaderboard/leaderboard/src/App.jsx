import { useState } from 'react';
import Navbar from "../src/component/Navbar"
import Board from "../src/component/Board"
import Footer from "../src/component/Footer"
import './component/styles.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Board/>
      <Footer/>
    </>
  )
}

export default App
