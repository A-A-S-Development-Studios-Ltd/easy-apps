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