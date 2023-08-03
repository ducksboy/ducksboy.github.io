function clickListener(event) {
	event.preventDefault();
}

let submitButton = document.querySelector("#submit-button");
submitButton.addEventListener('click', clickListener);
console.log(submitButton);