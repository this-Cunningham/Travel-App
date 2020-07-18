import { dateConverter } from './dateConverter.js'

export async function destinationFetcher () {
  const destinationValue = document.getElementById('destination').value;
  const baseURL = `http://api.geonames.org/searchJSON?q=${destinationValue}&maxRows=10&username=this_cunningham`
  let htmlContainer = '';

console.log(document.getElementById('fromDate').value)

  const response = await fetch(baseURL);

  try {
    const data = await response.json();
console.log(data)
    const transporter = { //refactor to merge both weather and geonames data
      destination: `${data.geonames[0].name}`,
      latitude: data.geonames[0].lat,
      longitude: data.geonames[0].lng,
      countryCode: `${data.geonames[0].countryCode}`,
      countryName: `${data.geonames[0].countryName}`
    };
    console.log(data)

    return transporter //need to use location to fetch the weather

  } catch(error){
    console.log('error', error)
  }
}

///////////////////////////////////////////////////////////////////////////////
