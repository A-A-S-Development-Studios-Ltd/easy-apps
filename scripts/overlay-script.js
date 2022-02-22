
/***********************************************/
/**************  Overlay Inject  ***************/
/***********************************************/

var htmlOverlayWrapper = document.getElementById('pop-window');
var htmlOverlayTemplate = `<div>
		<div id="pop-banner">
			<h4 class="white"><span id="pop-title">Schedule your free consultation</span></h4>
		</div>	
		<div class="pop-content">
			<div id="pop-form">
				<p>This 15m meeting will explain more details about our app building process, applicable contracts and answer any other questions.</p>
				<p><b>Fill out the form below to get started.</b></p>
				<form id="pform">
					<label for="name" id="name-label">Name:</label>
					<input type="text" id="name" name="name" placeholder="Your name.." required>

					<label for="email" id="email-label">Email:</label>
					<input type="text" id="email" name="email" placeholder="Your contact info.." required>
					
					<input type="hidden" name="message" value="No Message">
					
					<div class="pop-actions">
						<div>
							<input type="submit" value="Submit" onclick="eventClick('LM-Submit', '')">
						</div>
						<div class="pop-close">
							<span onclick="eventClick('LM-Cancel', 'closeOverlay')" tabindex="0">Close</span>
						</div>			
					</div>			
				</form>
			</div>
			<div id="pop-success" class="displayNone">
				<p><b>Thank you for contacting us.</b></p>
				<p>A member from our client success team will reach out to you shortly.</p>	
				<div class="blue-button" onclick="eventClick('LM-Won', 'closeOverlay')" tabindex="0">
					<p>Close</p>
				</div>					
			</div>
		</div>
	</div>`;
htmlOverlayWrapper.innerHTML = htmlOverlayTemplate;


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
/*****************  Popup Form  ****************/
/***********************************************/

function handlePopResponse(reply) {
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
function handlePopSubmit(event) {
	event.preventDefault();

	const data = new FormData(event.target);

	const value = Object.fromEntries(data.entries());
	
	let url = 'http://dev.easy-apps.ca:3000/contact.cfc?method=sendInfo&returnFormat=JSON';
		
	if(window.location.hostname == 'easy-apps.ca') {
		url = 'https://easy-apps.ca/contact.cfc?method=sendInfo&returnFormat=JSON';
	}
	
	postData(url, value).then((response) => {
	  //This runs afer the email has been sent. So you  can do whatever is needed here.
	  handlePopResponse(response);
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
const pform = document.getElementById('pform');
pform.addEventListener('submit', handlePopSubmit);

