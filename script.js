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

const scene = document.querySelector('a-scene');
const data = loadData();
data.forEach((location) => {
    const box = createBox(location.latitude, location.longitude);
    const text = createText(location.latitude, location.longitude, location.adresse);
    scene.appendChild(text);
    scene.appendChild(box);
});

function loadData() {
  //get data from backend
  //mock data for now
  return [
    {
      "adresse": "Karlstraße 45, 80333 München",
      "latitude": 48.145,
      "longitude": 11.567
    },
    {
      "adresse": "Karlstraße 45, 80333 München",
      "latitude": 48.145,
      "longitude": 11.567
    },
    {
      "adresse": "Karlstraße 45, 80333 München",
      "latitude": 48.145,
      "longitude": 11.567
    },
    {
      "adresse": "Karlstraße 45, 80333 München",
      "latitude": 48.145,
      "longitude": 11.567
    },
    {
      "adresse": "Karlstraße 45, 80333 München",
      "latitude": 48.145,
      "longitude": 11.567
    },
    {
      "adresse": "Karlstraße 45, 80333 München",
      "latitude": 48.145,
      "longitude": 11.567
    },
    {
      "adresse": "Karlstraße 45, 80333 München",
      "latitude": 48.145,
      "longitude": 11.567
    },
    {
      "adresse": "Karlstraße 45, 80333 München",
      "latitude": 48.145,
      "longitude": 11.567
    }
  ]
}

