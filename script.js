function createBox(latitude, longitude) {
    const model = document.createElement('a-box');
    model.setAttribute('gps-entity-place',`latitude:  ${latitude}; longitude: ${longitude};`);
    model.setAttribute("look-at", '[gps-camera]');
    model.setAttribute('color', 'red');
    model.setAttribute('width', '100');
    model.setAttribute('height', '100');
    model.setAttribute('depth', '100');
    model.addEventListener("loaded", () => {
        window.dispatchEvent(new CustomEvent("gps-entity-place-loaded"));
      });  
    return model;
}

function createText(latitude, longitude, text) {
    const model = document.createElement('a-text');
    model.setAttribute('value', text);
    model.setAttribute('gps-entity-place',`latitude:  ${latitude}; longitude: ${longitude};`);
    model.setAttribute("scale", "50 50 50")
    model.setAttribute("color", "black")
    model.setAttribute("look-at", '[gps-camera]');
    model.addEventListener("loaded", () => {
        window.dispatchEvent(new CustomEvent("gps-entity-place-loaded"));
      });  
    return model;
}

loadData();


function loadData() {
  fetch("https://localhost:8443/data")
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Server response wasn\'t OK');
      }
    })
    .then(data => {
      console.log(data);
      data.forEach((location) => {
        const scene = document.querySelector('a-scene');
        const box = createBox(location.latitude, location.longitude);
        const text = createText(location.latitude, location.longitude, location.adresse);
        scene.appendChild(text);
        scene.appendChild(box);
    });
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });
}

