import React, {useEffect, useState} from 'react'
import 'aframe';
import 'aframe-ar';


function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js';
    script.async = true;

    // Append the script element to the component
    document.body.appendChild(script);

    // Cleanup function to remove the script element when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
        console.log(data);
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      });
  }, []);

  return (
    <a-scene
      vr-mode-ui="enabled: false"
      embedded
      arjs="sourceType: webcam; sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960; debugUIEnabled: true;"
    >
      {backendData.map((location, index) => {
        return (
          <a-box
            gps-entity-place={`latitude: ${location.latitude}; longitude: ${location.longitude};`}
            name="location"
            key={index}
            material="color: red;"
            scale="10 10 10"
            position="0 0 0"
          >
            <a-text
              value={location.adresse}
              color="black"
              align="center"
              position="0 0 0"
            ></a-text>
          </a-box>
        )
      }
      )}
    <a-camera gps-camera="maxDistance: 20; minDistance: 5; simulateLatitude: 48.116937; simulateLongitude: 11.539696;" rotation-reader> </a-camera>
    </a-scene>
  )
}

export default App