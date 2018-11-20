$(document).ready(function() {
    $('body').css({ "display" : "block" });
    
    //set initial state of menu
    let showMenu = false;
    
    $('.menu-btn').click(toggleMenu);
    
    function toggleMenu() {
        if(!showMenu) {
            $('.menu-btn').addClass('close');
            $('.menu').addClass('show');
            $('.menu-items').addClass('show');
            $('.menu-item').addClass('show');
            $('.menu-brand').addClass('show');
            
            showMenu = true;
             
        } else {
            $('.menu-btn').removeClass('close');
            $('.menu').removeClass('show');
            $('.menu-items').removeClass('show');
            $('.menu-item').removeClass('show');
            $('.menu-brand').removeClass('show');
            
            showMenu = false;
        }
    }
});

