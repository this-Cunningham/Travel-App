import './js/app.js'
import './styles/styles.scss'
import './styles/form.scss'
import { weatherFetch } from './js/weatherFetch.js'
import { destinationFetcher } from './js/app.js'
import { outputInjector} from './js/outputInjector.js'
import { pixabayFetch } from './js/pixabayFetch.js'
import { savePost } from './js/savePost.js'

(function submitter () {
  const destinationButton = document.getElementById('destinationButton')

  destinationButton.addEventListener('click', function() {

    destinationFetcher()
    .then(weatherFetch)
    .then(pixabayFetch)
    .then(outputInjector)
    .then(savePost)
  })
})()
