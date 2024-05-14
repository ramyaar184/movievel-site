
//Swiper
var swiper = new Swiper(".popular-content", {
    slidesPerview:1,
    spaceBetween: 10,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      
      480: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      
      640: {
        slidesPerView: 4,
        spaceBetween: 20
    },
      
  },
  });
  //show video
  let playButton = document.querySelector(".play-movie");
  let video = document.querySelector(".video-container");
  let myvideo = document.querySelector("#myvideo");

  let closebtn = document.querySelector(".close-video");

  playButton.onclick = () => {
    video.classList.add("show-video");
    //Auto play when click on button
    myvideo.play();
  }
  closebtn.onclick = () => {
    video.classList.remove("show-video");
    //Auto play when click on button
    myvideo.pause();
  }