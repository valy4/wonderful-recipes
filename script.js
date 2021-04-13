const searchbox = document.getElementById("search-bar");
const container = document.getElementById("recipes-container");

searchbox.addEventListener(`keypress`, function (event) {
  console.log(event);
  if (event.key == "Enter") {
    const search = document.getElementById("search-bar").value;

    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${search}&addRecipeInformation=true&apiKey=cc7961a8e292403b983f2c208132a9f4`
    )
      .then((response) => response.json())

      .then((data) => {
        console.log(data, "data");
        // do something with the results
        const recipeList = data.results;
        container.innerHTML = "";
        for (let i = 0; i < recipeList.length; i++) {
          // paint the recipe
          let recipe = recipeList[i];
          const recipeTitle = document.createElement("p");
          recipeTitle.innerText = recipe.title;
          container.appendChild(recipeTitle);
          console.log(recipe);

          const img = document.createElement("img");
          img.setAttribute("src", recipe.image);
          container.appendChild(img);

          const btn = document.createElement("button")
          btn.innerHTML = "See Full Recipe";
          btn.classList.add("see-full-recipe")
          container.appendChild(btn);

        }
      });
  }
});
