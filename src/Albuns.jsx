// Import
import './Albuns.css'
import {useState, useEffect} from "react"

// Function
function Albuns({setMusicArray}) {
  // States variables
  const [discography, setDiscography] = useState([]);
  const [musicButton, setMusicButton] = useState("");

  // Fetch API
  function getData() {
    fetch('https://tyler-the-creator-api.herokuapp.com/discography')
    .then(response => response.json())
    .then(data => setDiscography(data))
  }

  // Seed the cards when the page reloads
  useEffect(() => {
    getData()
  }, [])

  // Event handler for button click
  function handleClick(event) {
    setMusicButton(event.target.className)
    setMusicArray(discography[parseInt(musicButton)].songs)
  }

  // Return
  return (
    <div className='container'>
      {
        discography.map((album, index) => (
          <div className='album'>
            <p className='title'>{album.title}</p>
            <p><span>Year: </span>{album.release_year}</p>
            <p><span>Minutes of songs: </span>{album.album_length}</p>
            <p><span>Number of songs: </span>{album.songs.length}</p>
            <button className={index} onClick={handleClick}>Discovery Musics</button>
          </div>
        ))
      }
    </div>
  )
}

// Export
export default Albuns