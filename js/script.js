function openNav() {
  document.getElementById("mySidenav").style.width = "320px";
  document.getElementById("main").style.marginLeft = "320px";
  document.body.style.backgroundColor = "";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}

$(document).ready(function(){
  $('.box_search button').click(function(){
    $('.box_search').toggleClass('active');
  });
});


  $(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('#accordion'), false);
});

$(document).ready(function(){
$('.bxslider').bxSlider();
});

jQuery(document).ready(function($) {
		$("#owl-example").owlCarousel({
			navigation:true,
			navigationText:false,
			pagination:false,
			autoPlay:	true
		});
});
