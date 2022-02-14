function initCarousel() {
	let carousel = document.querySelector(".carousel");
	let slidesContainer = carousel.querySelector(".carousel__inner");
	let	slides = slidesContainer.querySelectorAll(".carousel__slide");
  let	leftArrow = carousel.querySelector(".carousel__arrow.carousel__arrow_left");
	let	rightArrow = carousel.querySelector(".carousel__arrow.carousel__arrow_right");
  let	slideWidth = slidesContainer.offsetWidth;
  let currentActiveSlide = slidesContainer.dataset.current ? slidesContainer.dataset.current : 0;


	if (currentActiveSlide === 0) {
		leftArrow.style.display = 'none';
	}

	leftArrow.addEventListener("click", function(evt) {
		evt.preventDefault();

		rightArrow.style.display = '';

		currentActiveSlide = slidesContainer.dataset.current ? 1 * slidesContainer.dataset.current : 0;

		let newActiveSlide = currentActiveSlide - 1,
			newTransformValue = newActiveSlide * slideWidth;

		slidesContainer.style.transform = `translateX(-${newTransformValue}px)`;

		slidesContainer.dataset.current = newActiveSlide;
		if (newActiveSlide === 0) {
			leftArrow.style.display = 'none';
		} else {
			leftArrow.style.display = '';
		}
	});

	rightArrow.addEventListener("click", function(evt) {
		evt.preventDefault();

		leftArrow.style.display = '';

		currentActiveSlide = slidesContainer.dataset.current ? 1 * slidesContainer.dataset.current : 0;

    let newActiveSlide = currentActiveSlide + 1;
			let newTransformValue = newActiveSlide * slideWidth;

		slidesContainer.style.transform = `translateX(-${newTransformValue}px)`;

		slidesContainer.dataset.current = newActiveSlide;
		if ( newActiveSlide === slides.length - 1 ) {
			rightArrow.style.display = 'none';
		} else {
			rightArrow.style.display = '';
		}
	});
}