(() => {
	const f_name = document.getElementById('fname');
	const l_name = document.getElementById('lname');
	const email = document.getElementById('email_address');
	const d_o_b = document.getElementById('dob');
	const subscribe = document.getElementById('subscribe');
	const clear =  document.getElementById('clear');
  
	const processEntries = () => {
		if (f_name.value.length == 0) {
			alert("First name cannot be empty.");
			return null;
		}
		if (l_name.value.length == 0) {
			alert("Last name cannot be empty.");
			return null;
		}
		if (email.value.length == 0) {
			alert("Email address cannot be empty.");
			return null;
		}
		if (d_o_b.value.length == 0) {
			alert("Date of birth cannot be empty.");
			return null;
		}
		alert("Thank you for subscribing!");
		f_name.value = "";
		l_name.value = "";
		email.value = "";
		d_o_b.value = "";
		
	}
	
	function ClearFields() {
		f_name.value = "";
		l_name.value = "";
		email.value = "";
		d_o_b.value = "";
	}
	
  
	subscribe.addEventListener('click', processEntries, false);
	clear.addEventListener('click', ClearFields, false);
})();