// hamburger on mobile
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const icon_nav = document.querySelector('.header .nav-bar .nav-list ul.icon-nav');
const word_nav = document.querySelector('.header .nav-bar .nav-list ul.word-nav');

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
const header = document.querySelector('.header.container');

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#313232';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});