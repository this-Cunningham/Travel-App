//weatherAPI
export async function weatherFetch (data) {
  const fromDate = document.getElementById('fromDate').value;
  const toDate = document.getElementById('toDate').value;

  const apiKey = 'de75564a7a424a2c8db3bf2f456d4ad2'
  const weatherURL = `https://api.weatherbit.io/v2.0/current?city=${data.destination},${data.countryCode}&units=I&key=${apiKey}`
  console.log(weatherURL)
  const weatherResponse = await fetch(weatherURL)

  try {
    const weatherData = await weatherResponse.json()
    console.log(weatherData)
    data['temperature']= weatherData.data[0].temp
    data.iconURL = `https://www.weatherbit.io/static/img/icons/${weatherData.data[0].weather.icon}.png`;
    data.iconDescription = weatherData.data[0].weather.description;

    return data
  }
  catch (error) {
    console.log('error', error)
  }

}
