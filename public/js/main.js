$(document).ready(function() {
    $('body').css({ "display" : "block" });
    
    //set initial state of menu
    let showMenu = false;
    
    $('.menu-btn').click(toggleMenu);
    
    //toggle menu func
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
 
    // index page letter animation (anime.js)
    $('.ml3').each(function(){
      $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });
    
    anime.timeline()
      .add({
        targets: '.ml3 .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 400,
        delay: function(el, i) {
          return 150 * (i+1)
        }
      }).add({
        targets: '.ml3',
        opacity: 1,
        duration: 300,
        easing: "easeOutExpo",
        delay: 30
      });
});

