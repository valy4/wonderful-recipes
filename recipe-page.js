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
    // const ingredientsList = document.getElementById("ingredients-list")
    // ingredientsList.innerHTML = data.ingredients;

    const prep = document.getElementById("cake-prep")
    prep.innerHTML = data.instructions;

    /* TODO: Get and display similar recipies */


  })
fetch(`https://api.spoonacular.com/recipes/${recipeId}/ingredientWidget.json?apiKey=cc7961a8e292403b983f2c208132a9f4`)

  .then(response => response.json())
  .then(data => {
    console.log(data, "my ingredients")
    const ingredients = data.ingredients
    const ingredientsList = document.getElementById("ingredients-list")
    for (let i = 0; i < ingredients.length; i++) {
      const listItem = document.createElement("li")
      listItem.innerText = ingredients[i].name;
      ingredientsList.appendChild(listItem)

    }

  })

fetch(`https://api.spoonacular.com/recipes/${recipeId}/similar?number=3&apiKey=cc7961a8e292403b983f2c208132a9f4`)
  .then(respons => respons.json())
  .then(data => {
    const similarRecipe = data;
    console.log(data, "text")
    for (let i = 0; i < similarRecipe.length; i++) {
      let recipe = similarRecipe[i]
      const recipeTitle = document.createElement("p");
      recipeTitle.innerText = recipe.title;
      container.appendChild(recipeTitle);
      const img = document.createElement("img");
      img.setAttribute("src", recipe.image);
      container.appendChild(img);
      const recipesLink = document.createElement("a")
      recipesLink.setAttribute("href", `/recipe-page.html?recipe_id=${recipe.id}`)
      const btn = document.createElement("button")
      btn.innerHTML = "See Full Recipe";
      btn.classList.add("see-full-recipe")

      recipesLink.appendChild(btn);


      container.appendChild(recipesLink);

    }

  })
// 3. "paint" the recipe data