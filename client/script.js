window.onload = () => {
  loadData();
};

function createModel(latitude, longitude) {
  const model = document.createElement('a-entity');
  model.setAttribute('gltf-model', 'https://cdn.glitch.global/a109d5b2-9392-4d70-a00e-3e06e20fe228/5g_telecommunications_mast.glb?v=1702380270094');
  model.setAttribute('scale', '0.05 0.05 0.05');
  model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
  model.addEventListener("loaded", () => {
    window.dispatchEvent(new CustomEvent("gps-entity-place-loaded"));
  });
  return model;
}

function createSphere(latitude, longitude, color, radius) {
  const sphere = document.createElement('a-sphere');
  sphere.setAttribute('theta-length', '90');
  sphere.setAttribute('color', color);
  sphere.setAttribute('radius', radius);
  sphere.setAttribute('opacity', '0.5');
  sphere.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
  return sphere;
}

function createRedSphere(latitude, longitude) {
  return createSphere(latitude, longitude, 'red', '3');
}

function createYellowSphere(latitude, longitude) {
  return createSphere(latitude, longitude, 'yellow', '2');
}

function createGreenSphere(latitude, longitude) {
  return createSphere(latitude, longitude, 'green', '1');
}

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
        const box = createModel(location.latitude, location.longitude);
        const redSphere = createRedSphere(location.latitude, location.longitude);
        const yellowSphere = createYellowSphere(location.latitude, location.longitude);
        const greenSphere = createGreenSphere(location.latitude, location.longitude);
        scene.appendChild(box);
        scene.appendChild(redSphere);
        scene.appendChild(yellowSphere);
        scene.appendChild(greenSphere);
      });
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });
}

