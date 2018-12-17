let caretP = document.querySelectorAll("#caret-parent");
caretP.forEach(caret => {
	caret.addEventListener("click", function (e) {

		if (e.target.classList.contains('fa-caret-up')) {
			e.target.parentElement.parentElement.children[1].classList.add('text-truncate');

			e.target.classList.replace('fa-caret-up', "fa-caret-down");

		} else if (e.target.classList.contains('fa-caret-down')) {
			e.target.classList.replace('fa-caret-down', "fa-caret-up");
			e.target.parentElement.parentElement.children[1].classList.toggle("text-truncate");

		}
	})

})

document.querySelector("form").addEventListener("submit", function (e) {
	e.preventDefault();
	let text = document.querySelector("input[type='text']").value;
	let email = document.querySelector("input[type='email']").value;
	let msg = document.querySelector("textarea").value;
	console.log(msg);

	if (text!== ""&&email!==""&&msg!=="") {
		alert("Submitted");
	} else {
		alert("Please fill out all the input fields")
	}



})
