/***********************************************/
/************  Animation Observers  ************/
/***********************************************/

function animationObserver (observedObject, animationClass) {
	const obs = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
			  entry.target.classList.add(animationClass);
			}
		});
	});

	obs.observe(document.querySelector(observedObject));
}

//Header Banner
animationObserver('.bg-triangles', 'bg-tri-ani');

//Contact Form Header
animationObserver('.cf-header', 'cf-header-ani');



/***********************************************/
/****************  Contact Form  ***************/
/***********************************************/

function handleContactResponse(reply) {
	var contactForm = document.getElementById("cf-form");
	var contactSuccess = document.getElementById("cf-success");
	var contactTitle = document.getElementById("cf-title");
	
	if(reply == "success") {
		contactForm.classList.add("displayNone");
		contactSuccess.classList.remove("displayNone");
		contactSuccess.classList.add("fadeIn");
		contactTitle.innerHTML = "Message Sent Successfully!";
	}
	
	if(reply == "invalid-name") {
		document.getElementById("cname-label").innerHTML = "Name: <span class='error-text'>Required</span>";
		document.getElementById("cname").classList.add("red-border");
	} else {
		document.getElementById("cname-label").innerHTML = "Name:";
		document.getElementById("cname").classList.remove("red-border");
	}
	
	if(reply == "invalid-email") {
		document.getElementById("cemail-label").innerHTML = "Email: <span class='error-text'>Invalid Email Address</span>";
		document.getElementById("cemail").classList.add("red-border");
	} else {
		document.getElementById("cemail-label").innerHTML = "Email:";
		document.getElementById("cemail").classList.remove("red-border");
	}
}
function handleContactSubmit(event) {
	event.preventDefault();

	const data = new FormData(event.target);

	const value = Object.fromEntries(data.entries());
	
	let url = 'http://dev.easy-apps.ca:3000/contact.cfc?method=sendInfo&returnFormat=JSON';
	
	if(window.location.hostname == 'easy-apps.ca') {
		url = 'https://easy-apps.ca/contact.cfc?method=sendInfo&returnFormat=JSON';
	}
	
	postData(url, value).then((response) => {
	  //This runs afer the email has been sent. So you  can do whatever is needed here.
	  handleContactResponse(response);
	});
}

async function postData(url = '', data = {}) {
	// Default options are marked with *
	const response = await fetch(url, {
	  method: 'POST', // *GET, POST, PUT, DELETE, etc.
	  mode: 'cors', // no-cors, *cors, same-origin
	  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
	  credentials: 'same-origin', // include, *same-origin, omit
	  headers: {
		'Content-Type': 'application/json',
		// 'Content-Type': 'application/x-www-form-urlencoded',
	  },
	  redirect: 'follow', // manual, *follow, error
	  referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
	  body: JSON.stringify(data), // body data type must match "Content-Type" header
	});
	return response.json(); // parses JSON response into native JavaScript objects
}

const cform = document.getElementById('cform');
cform.addEventListener('submit', handleContactSubmit);