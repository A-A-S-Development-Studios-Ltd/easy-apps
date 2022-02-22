
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

