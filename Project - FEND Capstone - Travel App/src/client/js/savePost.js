//click save button to post data to server endpoint
export function savePost (data) {
  const saveButton = document.getElementById('saveButton');

  saveButton.addEventListener('click', async function(){

    const response = await fetch('/formHandler', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    try {
      const data = response.json();

    } catch (error) {
      console.log('error',error)
    }
  })
}
