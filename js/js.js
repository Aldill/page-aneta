let oldPos = window.pageYOffset || document.documentElement.scrollTop;
window.addEventListener("scroll", function () {
	let newPos = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
	if (oldPos > newPos || newPos < 80) {
		document.querySelector('.menu').classList.remove('menu--hide');
	} else {
		document.querySelector('.menu').classList.add('menu--hide');
	}
	oldPos = newPos <= 0 ? 0 : newPos;// For Mobile or negative scrolling
}, false);

document.querySelectorAll('.foot__text--href, .menu__item').forEach(button => {
	button.addEventListener('click', button => {
		const sectonTop = document.querySelector(`.${button.currentTarget.name}`).offsetTop;
		window.scroll(0, sectonTop);
		if (window.screen.width < 480) {
			document.querySelector('.menu').classList.toggle('menu--show');
		}
	})
});


const menuButton = document.querySelector('.menu__logo');
menuButton.addEventListener('click', () => {
	document.querySelector('.menu').classList.toggle('menu--show');
});