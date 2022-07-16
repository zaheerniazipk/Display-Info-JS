// Step 1: Fill in these three const by selecting the right nodes by their HTML ID's
const my_name = document.getElementById("name"); 
const age = document.getElementById("age"); 
const sevenYears = document.getElementById("sevenyears"); 

// Step 2. Set the values.
// Example: myNode.innerText = "something"
// Set `name` and `age` in here
my_name.innerText = "Zaheer";
age.innerText  = "23";


function showsevenYears(age) {
  // Step 3. Cast `age` as a number
  sevenYears.innerText = Number(age) + 7;
  return Number(age) + 7
}

// Step 4. Set the parameter of showsevenYears()
sevenYears.innerText = showsevenYears(age.innerText)

// Step 5. Select all the .fake-input classes and give them the class of .real-input. This may take a little "googling" to find the solution, but that's half of what web development is all about. 
const fakeInputs = document.querySelectorAll(".fake-input")
fakeInputs.forEach(node => {
    // Add a new Class using JS Dynamically
  node.classList.add("real-input");
})






// Project Source : https://codepen.io/KalobTaulien/pen/VwjxyGR