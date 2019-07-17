const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);

const attachToInfoElement = jsonArray => {
  const title = document.getElementById("title");
  title.innerText = jsonArray.recipeTitle;

  const name = document.getElementById("name");
  name.innerText = jsonArray.username;

  const mins = document.getElementById("mins");
  mins.innerText = "Time to make: " + jsonArray.minutes + " minute" + `${jsonArray.minutes !== 1 ? "s" : ""}`;

  const steps = document.getElementById("steps");
  let stepsString = "";
  let i = 0;
  for (step of jsonArray.steps) {
    stepsString += "Step " + `${i+1}` + ":\n" + `${jsonArray.steps[i]}` + "\n\n";
    i += 1;
  }
  steps.innerText = stepsString;
  // steps.style.margineft = `${window.innerWidth/4}%`;

};

// save list element to a variable
let itemEl = document.getElementById("recipe");

fetch("http://localhost:3000/recipes/" + id)
  .then(res => res.json())
  .then(res => {
    console.log(res);
    attachToInfoElement(res);
  });
