// Import
import './Music.css'

// Function
function Music({ musicArray }) {
  // Return
  return (
    <div className='music-container'>
      {
        musicArray.map(music => (
          <div className='music'>
            <p><span>{music.track_number}</span>  {music.song_title}  <span>{music.song_length}</span></p>
          </div>
        ))
      }
    </div>
  )
}

// Export
export default Music