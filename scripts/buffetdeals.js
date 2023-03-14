const swiper = new Swiper('.swiper', {
   
    autoplay:{
        delay:2500,
        disableOnInteraction:false
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  });