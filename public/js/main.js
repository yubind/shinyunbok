const menuBtn = $('.menu-btn');
const menu = $('.menu');
const menuBrand = $('.menu-brand');
const menuItems = $('.menu-items');
const menuItem = $('.menu-item');

menuBtn.on('click', function() {
    menu.toggleClass('visible');
});