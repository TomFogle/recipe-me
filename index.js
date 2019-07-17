console.log("connected");

const attachToListElement = jsonArray => {
  let itemEl;
  jsonArray.forEach(recipe => {
    itemEl = document.createElement("p");
    // itemEl.innerText = JSON.stringify(recipe);

    const link = document.createElement("p");
    link.style.textAlign = "center";
    link.innerHTML = `<a href="recipe-page.html?id=${recipe.id}">${recipe.recipeTitle}</a>`;
    itemEl.appendChild(link);

    const user = document.createElement("p");
    user.style.textAlign = "center";
    user.innerText = "by: " + recipe.username;
    itemEl.appendChild(user);

    listEl.appendChild(itemEl);
  });
};

// save list element to a variable
let listEl = document.getElementById("list");

// fetch recipes
fetch("http://localhost:3000/recipes?_page=1")
  .then(res => res.json())
  .then(res => {
    console.log(res);
    attachToListElement(res);
  });

// iterate over each json recipe and --
// recipeList.forEach(x => console.log(x));

// load recipes onto list element

// <ul>
// <li>one</li>
// <li>two</li>
// <li>three</li>
// </ul>
