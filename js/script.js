// $( "#icon" ).click( function() {
//     $("body").toggleClass('fixed');
// });

// $(document).ready(function(){
//     $('#icon').click(function(){
//      $('ul').toggleClass('show');

//     $(this).toggleClass('open-icon close-icon');
//     });
//  });

 document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('icon').addEventListener('click', function() {
                document.querySelector('ul').classList.toggle('show');
                document.querySelector('.open-icon').classList.toggle('hidden');
                document.querySelector('.close-icon').classList.toggle('hidden');
            });
        });






//   GIF Preloader

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
});

//   End of GIF Preloader