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


// This script is for scroll to top function
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  // console.log(scrollValue);

  if (pos > 100){
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#800000 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
}

window.onscroll = calcScrollValue;




//   GIF Preloader

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
});

//   End of GIF Preloader


// Select relevant HTML elements
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .fit-card");

// Function to filter cards based on filter buttons
const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));