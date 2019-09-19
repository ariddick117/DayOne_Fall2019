import Team from './modules/DataObject.js';
// Person refers to the object


// this is an IIFE -> Immediately Invoked Function Expression
// this is the Javascript Module Pattern
(() => {
	console.log('My JS issa workin!');
	
	let bioData = document.querySelector('.bio-wrapper').children; // grabbing all items within the bio-wrapper div to create an array

	// populate the children within the data object values
	// thing to the left of the dot is what you're working with
	// textContent is a property (a physical thing you can change)

	// bioData[0].textContent = Person["name"];
	// bioData[1].textContent = Person["role"];
	// bioData[2].textContent = Person["bio"];

	function parsePersonData() {
		// this = the button/trigger that you clicked on to make the function run
		let person = this.textContent;

		// populate the children with the data object values
		bioData[0].src = `images/${Team[person].avatar}`;
		bioData[1].textContent = Team[person].name;
		bioData[2].textContent = Team[person].role;
		bioData[3].textContent = Team[person].bio;
	}

	// loop through the object and build some UI
	for (let person in Team) {
		console.log(person);

		// create a button for each team member
		let currentButton = document.createElement('button');

		// add the person's name to the button
		currentButton.textContent = person;
		// add an event handler to the button
		currentButton.addEventListener('click', parsePersonData);
		// put the button in the team section on index.html
		document.querySelector('.team').appendChild(currentButton);

		// bioData.nextElementSibling.appendChild(currentButton)
	}
})();