import React, {useEffect, useState} from 'react'

function App() {
  const [backendData, setBackendData] = useState([{}])
  useEffect(() => {
    fetch("https://localhost:8443/data")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Server response wasn\'t OK');
        }
      })
      .then(data => {
        setBackendData(data);
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      });
  }, []);
  return (
    <div>
      
    </div>
  )
}

export default App