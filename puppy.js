let searchButton = document.querySelector('#searchButton');
let queryInput = document.querySelector('#query');
let url = 'https://recipe-puppy-proxy.herokuapp.com/api/recipes?q=';

searchButton.addEventListener('click', function() {
  let val = queryInput.value;
  let finalUrl = url + val;

  console.log(finalUrl);

  fetch(finalUrl)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    let html = '';
      for (var i = 0; i < data.results.length; i++) {
        let result = data.results[i];
        // console.log('each character',data.characters[i])
        html += `<div>
        <h2>${result.title}<h2>
        <h3>${result.thumbnail}</h3>
        <p> ${result.href}</p>
        </div>`
    }
  })
    section.innerHTML = html;
  });
      // console.log('each character',data.characters[i])



// thumbnail":"http:\/\/img.recipepuppy.com\/9.jpg"},{"title":"Amy's Barbecue Chicken Salad","href":"http:\/\/allrecipes.com\

// fetch('https://crossorigin.me/http://www.recipepuppy.com/api/')
//   .then(function(response){
//     return response.json();
