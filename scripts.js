
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

