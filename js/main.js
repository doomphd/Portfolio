

jQuery(function () {


    let $btns = $('.portfolio-area .button-group button');


    $btns.on('click', function(e) {
        
        $('.portfolio-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.portfolio-area .grid').isotope({
            filter: selector
        });

        return false;
    })

   $('.portfolio-area .button-group #btn1').trigger('click');

    $('.portfolio-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });



});