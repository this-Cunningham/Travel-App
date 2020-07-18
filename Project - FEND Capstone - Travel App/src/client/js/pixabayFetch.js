//picture fetching

export async function pixabayFetch(data){
  const apiKey = '17487432-1eda30ce0aba3559afc625741'
  const pixabayURL = `https://pixabay.com/api/?key=${apiKey}&q=${data.destination}&image_type=photo`
  console.log(data)
  const response = await fetch(pixabayURL);

  try {
    const pixabayData = await response.json();
    data['picture'] = pixabayData.hits[0].webformatURL
    console.log(data)
    return data
  } catch (error) {
    console.log('error', error)
  }
}
