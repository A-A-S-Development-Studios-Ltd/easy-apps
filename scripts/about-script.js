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
