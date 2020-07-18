import { dateConverter } from './dateConverter.js'

export function outputInjector (data) {
  const outputContainer = document.getElementById('outputContainer');

  outputContainer.innerHTML = ''

  const htmlContent = `
    <div class = "injected">

      <div id = "destWidget">
        <h2><strong>Destination:</strong>
        <div>
          ${data.destination}, ${data.countryName}
        </div></h2>
        <p>${dateConverter()}</p>
        <ul>
          <li><strong>Latitude:</strong> ${data.latitude}</li>
          <li><strong>Longitude:</strong> ${data.longitude}</li>
        </ul>

        <div id = "weatherIcon">
          <img src =${data.iconURL}>

          <div>
            <strong>Current Weather:</strong><br>
            <p>${data.iconDescription}</p>
          </div>

          <div>
            <strong>Temperature:</strong><br>
            <p>${data.temperature}˚F</p>
          </div>

        </div>

      </div>

      <img src =${data.picture} id = "fetchPic">
      <button id = "saveButton" class = "button"type = "button"> + Save Trip </button>
    </div>`
  outputContainer.insertAdjacentHTML('beforeend', htmlContent);

  return data;
}
