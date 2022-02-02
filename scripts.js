
/***********************************************/
/****************  Mobile Menu  ****************/
/***********************************************/

function showMenu() {
  var menu = document.getElementById("mobile-menu");
  var overlay = document.getElementById("menu-overlay");
  if (!menu.classList.contains("menu-open-ani")) {
	//open menu
	menu.classList.remove("menu-close-ani");	
	menu.classList.add("menu-open-ani");	
	//show overlay
	overlay.classList.add("overlay-open-ani");
	overlay.classList.remove("overlay-close-ani");	
  } else {	  
	//close menu
	menu.classList.remove("menu-open-ani");	
	menu.classList.add("menu-close-ani");
	//close overlay
	overlay.classList.remove("overlay-open-ani");	
	overlay.classList.add("overlay-close-ani");
  }
}



/***********************************************/
/***************  Overlay Popup  ***************/
/***********************************************/

function showOverlay() {
  var popWindow = document.getElementById("pop-window");
  var overlay = document.getElementById("full-screen-overlay");
  var banner = document.getElementById("pop-banner");
  
  popWindow.classList.remove("pop-window-close-ani");
  popWindow.classList.add("pop-window-open-ani");
  
  overlay.classList.remove("fs-overlay-close-ani");
  overlay.classList.add("fs-overlay-open-ani");  
  
  banner.classList.add("pop-banner-ani");
}

function closeOverlay() {
  var popWindow = document.getElementById("pop-window");
  var overlay = document.getElementById("full-screen-overlay");
  var banner = document.getElementById("pop-banner");
  
  popWindow.classList.add("pop-window-close-ani");
  popWindow.classList.remove("pop-window-open-ani");
  
  overlay.classList.add("fs-overlay-close-ani");
  overlay.classList.remove("fs-overlay-open-ani");

  banner.classList.remove("pop-banner-ani");  
}


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

//Hero Banners
animationObserver('.videoBanner', 'video-banner-ani');
animationObserver('.bg-dots-blue-video', 'bg-dots-blue-ani');

//Feature Box Observers
animationObserver('.box1', 'box1-ani');
animationObserver('.box2', 'box2-ani');
animationObserver('.box3', 'box3-ani');
animationObserver('.box4', 'box4-ani');

//Bg Triangles
animationObserver('.bg-triangles', 'bg-tri-ani');

//Feature Card Observers
animationObserver('.card1', 'card1-ani');
animationObserver('.card2', 'card2-ani');
animationObserver('.card3', 'card3-ani');


/***********************************************/
/***************  Scroll Reload  ***************/
/***********************************************/

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}



/***********************************************/
/****************  Contact Form  ***************/
/***********************************************/
function handleResponse(reply) {
	var popForm = document.getElementById("pop-form");
	var popSuccess = document.getElementById("pop-success");
	var popTitle = document.getElementById("pop-title");
	
	if(reply == "success") {
		popForm.classList.add("displayNone");
		popSuccess.classList.remove("displayNone");
		popSuccess.classList.add("fadeIn");
		popTitle.innerHTML = "Message Sent Successfully!";
	}
	
	if(reply == "invalid-name") {
		document.getElementById("name-label").innerHTML = "Name: <span class='error-text'>Required</span>";
		document.getElementById("name").classList.add("red-border");
	} else {
		document.getElementById("name-label").innerHTML = "Name:";
		document.getElementById("name").classList.remove("red-border");
	}
	
	if(reply == "invalid-email") {
		document.getElementById("email-label").innerHTML = "Email: <span class='error-text'>Invalid Email Address</span>";
		document.getElementById("email").classList.add("red-border");
	} else {
		document.getElementById("email-label").innerHTML = "Email:";
		document.getElementById("email").classList.remove("red-border");
	}
}
function handleSubmit(event) {
	event.preventDefault();

	const data = new FormData(event.target);

	const value = Object.fromEntries(data.entries());
	let url =
	  'http://dev.easy-apps.ca:3000/contact.cfc?method=sendInfo&returnFormat=JSON';
	postData(url, value).then((response) => {
	  //This runs afer the email has been sent. So you  can do whatever is needed here.
	  handleResponse(response);
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
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

