$(function(){
    $('.new_item-all').slick({       
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 870,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 1,
            }
          }
        ]       
      });
    $('.menu_btn').on('click', function(){
      $('.header_text').toggleClass('header_text-active')
    });
});

$( window ).resize(function() {
  if ($( window ).width() > 993)
    $("#swap1").insertBefore($("#swap2"));   
  else
    $("#swap2").insertBefore($("#swap1"));   
});


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
if (!event.target.matches('.header_button')) {

  var dropdowns = document.getElementsByClassName("header_catalog-dropdown");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
};

