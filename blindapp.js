// hamburger on mobile
const hamburger = document.querySelector('.noheader .nav-bar .nav-list .hamburger');
const menu_item = document.querySelectorAll('.noheader .nav-bar .nav-list ul li a');
const icon_nav = document.querySelector('.noheader .nav-bar .nav-list ul.icon-nav');
const word_nav = document.querySelector('.noheader .nav-bar .nav-list ul.word-nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    icon_nav.classList.toggle('active');
    word_nav.classList.toggle('active');
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        icon_nav.classList.remove('active');
        word_nav.classList.remove('active');
    });
});

//header changing colour
const header = document.querySelector('.noheader.container');

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#1f2121';
	} else {
		header.style.backgroundColor = '#313232';
	}
});