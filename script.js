let orderForm = document.getElementById("form");
orderForm.addEventListener("submit", (e) => {
	e.preventDefault();

	let email = document.getElementByName("email");
	let orderInstructions = document.getElementById("order-instructions");

	if(email.value == "" || orderInstructions.value == "") {
		alert("Ensure you input a value in both fields");
		//throw error
	} else {
		// perform operation with form input
		alert("Your order has been successfully submitted!");
		console.log(
			email: ${email.value} order instructions: ${orderInstructions.value}
		);
		email.value="";
		orderInstructions.value="";
	}
});
