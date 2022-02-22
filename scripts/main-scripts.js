
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
/***************  Footer Inject  ***************/
/***********************************************/

var htmlWrapper = document.querySelector('footer');
var htmlTemplate = `<div class="footer-container">
		<div class="footer-col1">
			<a href="/" tabindex="0"><img alt="Easy Apps Logo" title="Easy Apps" src="assets/logo/easy-apps-logo.svg" width="300px" ></a>
			<p class="default darkGrey footer-copy-text">
				&copy; A.A.S. Development Studios Ltd. 2022
			</p>
		</div>		
		<div class="footer-col2">
			<p class="footer-sub-header default white">Portfolio</p>
			<p><a onclick="eventClick('FVP-ePDF', 'easyPDF')" class="darkGrey footer-link" tabindex="0">Easy PDF Signer</a></p>
			<p><a onclick="eventClick('FVP-eTodo', 'easyTodo')" class="darkGrey footer-link" tabindex="0">Easy Todo (Beta)</a></p>
			<p><a onclick="eventClick('FVP-Buginator', 'buginator')" class="darkGrey footer-link" tabindex="0">Buginator</a> 
				<span class="darkGrey" style="margin-left:10px;">
					<a onclick="eventClick('FVP-Bug-Android', 'bug-android')" tabindex="0"><img alt="Android" class="footer-link-icon" src="assets/icons/android.svg" width="17px" /></a> / 
					<a onclick="eventClick('FVP-Bug-Apple', 'bug-apple')" tabindex="0"><img alt="Apple" class="footer-link-icon" src="assets/icons/apple.svg" width="17px" /></a>		
				</span>
			</p>
		</div>
		<div class="footer-col3">
			<p class="footer-sub-header default white">Company</p>
			<p><a href="about.html" class="darkGrey footer-link" tabindex="0">About</a></p>
			<p><a href="contact.html" class="darkGrey footer-link" tabindex="0">Contact</a></p>
			<p><a href="privacy.html" class="darkGrey footer-link" tabindex="0">Privacy Policy</a></p>
		</div>
		<div class="footer-col4">
			<p class="footer-sub-header default white">Social</p>
			<div style="display:inline-flex;">
				<img alt="Facebook" src="assets/icons/facebook.svg" width="50px" class="social-link" />
				<img alt="LinkedIn" src="assets/icons/linkedin.svg" width="50px" class="social-link" />
			</div>
		</div>
	</div>`;
htmlWrapper.innerHTML = htmlTemplate;



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
/***************  Scroll Reload  ***************/
/***********************************************/

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

function scrollPage(target) {
	
	const yOffset = -90; 
	const element = document.getElementById(target);
	const yPos = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

	window.scrollTo({top: yPos, behavior: 'smooth'});
}


/***********************************************/
/**************  Data layer Click  *************/
/***********************************************/

window.dataLayer = window.dataLayer || [];

function eventClick(clickedObject, redirectTarget) {
	
	/* Analtyics Info */
	var pageName = window.location.pathname;		
	if(pageName == '/'){ pageName = "Home";	}
	var userBrowser = navigator.appVersion;
	
	dataLayer.push({
		'event': 'user-action',
		'eventLocation': pageName,
		'eventName': clickedObject,
		'userBrowser': userBrowser,
	});
	
	/*Redirects*/
	if (redirectTarget == "showOverlay") {
		showOverlay();	}
	
	if (redirectTarget == "closeOverlay") {
		closeOverlay();	}
	
	if (redirectTarget == "homeScroll-1") {
		scrollPage('home-section1');	}
	
	if (redirectTarget == "services") {
		window.location.href = "/services.html";	}
	
	if (redirectTarget == "easyPDF") {
		window.open('https://easypdfsigner.ca/', '_blank').focus();	}
	
	if (redirectTarget == "easyTodo") {
		window.open('https://qa.easy-apps.ca/easytodo/app/login', '_blank').focus();	}
	
	if (redirectTarget == "buginator") {
		window.open('https://itch.io/jam/game-off-2021/rate/1286854', '_blank').focus();	}
	
	if (redirectTarget == "bug-android") {
		window.open('https://play.google.com/store/apps/details?id=com.a.a.s.developmentstudios.githubgameoff2021', '_blank').focus();	}
	
	if (redirectTarget == "bug-apple") {
		window.open('https://apps.apple.com/us/app/buginator/id1597865535', '_blank').focus();	}	
		
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

