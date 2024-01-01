var swiper = new Swiper(".swiper", {
    speed:2500,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      waitForTransition: false,
    },
    //   loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      
    },
  });