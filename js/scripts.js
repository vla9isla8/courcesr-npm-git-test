function createModal(buttonId,modalId) {
    var loginModal = $(modalId).modal({
        show: false
    });
    $(buttonId).click(function() {
        loginModal.modal('toggle');
    })
}

$(document).ready(function(){
    var mycarousel = $("#mycarousel").carousel( { interval: 2000 } );
    var button = $("#carouselButton");
    button.click(function(){
        if (button.children("span").hasClass('fa-pause')) {
            mycarousel.carousel('pause');
            button.children("span").removeClass('fa-pause');
            button.children("span").addClass('fa-play');
        }
        else if (button.children("span").hasClass('fa-play')){
            mycarousel.carousel('cycle');
            button.children("span").removeClass('fa-play');
            button.children("span").addClass('fa-pause');                    
        }
    });
    createModal("#loginBtn","#loginModal");
    createModal("#reserveBtn","#reservation");
});
