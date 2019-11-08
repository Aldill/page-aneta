let oldPos = window.pageYOffset || document.documentElement.scrollTop; //init old variable to get first distance
window.addEventListener("scroll", function () {
	let newPos = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
	if (oldPos < newPos) {
		document.getElementsByClassName("menu-header")[0].style.top = "-80px";
	} else {
		document.getElementsByClassName("menu-header")[0].style.top = "0px";
	}
	oldPos = newPos <= 0 ? 0 : newPos;// For Mobile or negative scrolling
}, false);

//|| (oldPos-newPos) >= 1)