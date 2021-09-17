const data = { funny: "Absolutely not", educational: "yas" }

fetch('https://stream.zenolive.com/frsvy955puquv', {
  method: 'GET', // The method
  mode: 'no-cors', // It can be no-cors, cors, same-origin
  credentials: 'same-origin', // It can be include, same-origin, omit
  headers: {
    'Content-Type': 'application/json', // Your headers
  },
  body: JSON.stringify(data),
}).then(returnedData => {
  // Do whatever with returnedData
}).catch(err => {
  // In case it errors.
})