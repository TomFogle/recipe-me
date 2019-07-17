console.log("connected!");
// .then(x) // Error!

// GET
// fetch("https://my-heroku-test55.herokuapp.com/animals")
//   // fetch("https://swapi.co/api/people/1/")
//   // .then(response => response.text())
//   // .then(response => console.log(response));
//   .then(response => response.json())
//   .then(json => console.log(json));

// POST
// const obj = JSON.stringify({ name: null });
//
// fetch("https://my-heroku-test55.herokuapp.com/animals", {
//   method: "POST",
//   body: obj,
//   headers: { "Content-Type": "application/json" }
// })
//   .then(response => response.json())
//   .then(json => console.log(json));

// PATCH
// const newObj = JSON.stringify({ name: "Whale" });
//
// fetch("https://my-heroku-test55.herokuapp.com/animals/42", {
//   method: "PATCH",
//   body: newObj,
//   headers: { "Content-Type": "application/json" }
// })
//   .then(response => response.json())
//   .then(json => console.log(json));

// DELETE
// fetch("https://my-heroku-test55.herokuapp.com/animals/45", {
//   method: "DELETE",
//   headers: { "Content-Type": "application/json", Accept: "application/json" }
// })
//   .then(response => response.json())
//   .then(json => console.log(json));

// CRUD: Create, Read, Update, Delete

// GET
// POST
// PATCH
// DELETE

// recipes

fetch("http://localhost:3000/recipes")
  .then(res => res.json())
  .then(res => console.log(res));

fetch("http://localhost:3000/recipes/4", {
  method: "PATCH",
  body: JSON.stringify({
    recipeTitle: "blintzes"
  }),
  headers: { "Content-Type": "application/json" }
});
