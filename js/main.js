import Person from './modules/DataObject.js';
// Person refers to the object


// this is an IIFE -> Immediately Invoked Function Expression
// this is the Javascript Module Pattern
(() => {
	console.log('My JS issa workin!');

	console.log(Person);
	
})();