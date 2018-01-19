$(document).ready(function(){

    //replace


    // $( ".employee-select" ).click(function() {
    //     $( ".select-dd-inner" ).replaceWith( $( "#employee" ) );
    // });

    



    window.sr = ScrollReveal({ 
        reset: false,
        distance: '0px',
        scale: 1,
        duration: 800
    });

    ///hero
    sr.reveal('.step-1', { 
        delay: 600,
        distance: '5px',
        origin:'bottom'
    });


    sr.reveal('.step-2', { 
        delay: 600,
        distance: '5px',
        origin:'bottom'
    });

    sr.reveal('.step-2-5', { 
        delay: 1600,
        distance: '5px',
        origin:'bottom'
    });

    sr.reveal('.step-3', {
        easing: 'ease-in',
        duration: 400, 
        delay: 2500,
        distance: '5px',
        origin:'bottom'
    });

    sr.reveal('.step-4', { 
        delay: 3000
    });

    sr.reveal('.step-5', { 
        easing: 'ease-in',
        duration: 400, 
        delay: 2500,
        distance: '5px',
        origin:'top'
    });

    ///other sections
    sr.reveal('.default-step-1', { 
        delay: 200,
        easing: 'ease-in-out',
        origin:'bottom',
        duration: 300,
        distance: '8px',
        viewOffset: { top: 0, right: 0, bottom: 100, left: 0 }
    });

    sr.reveal('.default-step-2', { 
        delay: 400,
        easing: 'ease-in-out',
        origin:'bottom',
        duration: 300,
        distance: '8px',
        viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }
    });




	// $('.tooltip-up').tooltip({html:true});

	// $( "#js-menu-button-open,#js-menu-button-close" ).click(function() {
 //        $( ".main-nav-container" ).toggleClass( "fixed-nav" );
 //        $( ".menu-drop" ).toggleClass( "menu-show" );
 //        $( "html" ).toggleClass( "nav-open" );
 //    });


    ///all the animations!

    // $('.slideinleftonload').viewportChecker({
    // classToAdd: 'fadeIn', // Class to add to the elements when they are visible,
    // classToAddForFullView: 'full-visible', // Class to add when an item is completely visible in the viewport
    // classToRemove: 'invisible', // Class to remove before adding 'classToAdd' to the elements
    // removeClassAfterAnimation: false, // Remove added classes after animation has finished
    // offset: [100 OR 10%], // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
    // invertBottomOffset: true, // Add the offset as a negative number to the element's bottom
    // repeat: false, // Add the possibility to remove the class if the elements are not visible
    // callbackFunction: function(elem, action){}, // Callback to do after a class was added to an element. Action will return "add" or "remove", depending if the class was added or removed
    // scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
    // });


    // $('.slideinRightonload').viewportChecker({
    //     classToAdd: 'fadeInRight',
    //     offset: 50
    // });

    // $('.slideinLeftonload').viewportChecker({
    //     classToAdd: 'fadeInLeft',
    //     offset: 50
    // });


    // $('.fadeInOnload').viewportChecker({
    //     classToAdd: 'fadeIn'
    // });

    //main nav
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        // if (scroll >= 200) {
        //     $(".global-nav").addClass("dark-header");
        // } else {
        //     $(".global-nav").removeClass("dark-header");
        // }
    });
    



});
