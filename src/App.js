// Import
import { useState } from "react"
import './App.css';
import Header from './Header.jsx'
import Albuns from './Albuns.jsx'
import Music from './Music.jsx'

function App() {
  // Lift API data among files
  const [musicArray, setMusicArray] = useState([])
  return (
    <div>
      <Header />
      <Albuns setMusicArray={setMusicArray} />
      <Music musicArray={musicArray} />
    </div>
  );
}

export default App;
