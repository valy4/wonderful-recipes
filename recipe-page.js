// 1. get the id from the url
const urlParams = new URLSearchParams(window.location.search);
const recipeId = urlParams.get('recipe_id');
console.log(recipeId, "recipeId")
// 2. use the id to fetch all the recipe data
fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=cc7961a8e292403b983f2c208132a9f4`)
  .then(response => response.json())
  .then(data => {

    console.log(data)
    const titleElement = document.getElementById("page-title")

    // set the recipe page title
    titleElement.innerText = data.title

    // set the recipe page image
    const mainImageContainer = document.getElementById("page-img-container")
    mainImageContainer.style.backgroundImage = `url('${data.image}')`;


    /* TODO */
    // Change also the description and the ingredients

    /* TODO: Get and display similar recipies */

  })
// 3. "paint" the recipe data