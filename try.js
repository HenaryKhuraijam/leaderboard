const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const request = new Request(requestURL);
const myGame = { name: 'Test 2' };
fetch(request, {
  method: 'POST',
  body: JSON.stringify(myGame),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));