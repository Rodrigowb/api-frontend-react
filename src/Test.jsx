// Import
import {useEffect} from 'react'

// Function
function Test (props) {
  
  function getData() {
    fetch('https://tyler-the-creator-api.herokuapp.com/discography')
    .then(response => response.json())
    .then(data => console.log(data))
  }

  // Seed the cards when the page reloads
  useEffect(() => {
    getData()
  }, [])

  // Return
  return (
    <h1>API working!!!</h1>
  )

}

// Export
export default Test