document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.navbar')
    const allNavItems = document.querySelectorAll('.nav-link')
    const navList = document.querySelector('.navbar-collapse')

    function addShadow() {
        if (window.scrollY >= 300) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }

    allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))

    window.addEventListener('scroll', addShadow)

})
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");

const imageArray = [
  {
    src: "/img/changes/przed.jpg",
    alt: "New Image 1"
  },
  {
    src: "/img/changes/przed2.jpg",
    alt: "New Image 2"
  },
  {
    src: "/img/changes/przed3.jpg",
    alt: "New Image 3"
  },
  // Add more images to the array here
];
const imageArray2 = [
    {
      src: "/img/changes/po.jpg",
      alt: "New Image 1"
    },
    {
      src: "/img/changes/po2.jpg",
      alt: "New Image 2"
    },
    {
      src: "/img/changes/po3.jpg",
      alt: "New Image 3"
    },
    // Add more images to the array here
  ];
  
let currentIndex = 0;



setInterval(function() {
    anime({
      targets: [image1,image2],
      opacity: [1, 0],
      duration: 1500,
      easing: 'linear',
      complete: function(anim) {
          image1.src = imageArray[currentIndex].src;
          image1.alt = imageArray[currentIndex].alt;
          image2.src = imageArray2[currentIndex].src;
          image2.alt = imageArray2[currentIndex].alt;
          anime({
          targets: [image1,image2],
          opacity: [0, 1],
          duration: 1500,
          easing: 'linear'
          });
          currentIndex = (currentIndex + 1) % imageArray.length;
      }
    });
  }, 8000);



  