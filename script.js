const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});



// first time use gsap for making animated website😊
gsap.to(".logo",{
    x:10,
    duration: 1, // seconds
    delay: 0.1,
    
})
gsap.to(".profile",{
    x:10,
    duration: 1, // seconds
    delay: 0.1,
    rotate:360
})
gsap.to("p",{
    x:9,
    duration: 1, // seconds
    delay: 0.1,
})
gsap.to(".circlecart",{
    x:20,
    duration: 1, // seconds
    delay: 0.1,
})
gsap.to(".box",{
    x:25,
    duration: 1, // seconds
    delay: 0.1,
})

gsap.to("h3",{
    x:10,
    duration: 1, // seconds
    delay: 0.1,
})
gsap.to("h4",{
    x:10,
    duration: 1.2, // seconds
    delay: 0.1,
})
gsap.to("h6",{
    x:10,
    duration: 1.2, // seconds
    delay: 0.1,
})
gsap.from(".mid",{
    y:200,
    duration: 1.6, // seconds
    delay: 0.1,
    opacity:0
})
gsap.to(".swiper-button-next",{
    x:10,
    duration: 1.6, // seconds
    delay: 0.12,
})
gsap.to("#cardone",{
    x:10,
    duration: 1.6, // seconds
    delay: 0.1,
})
gsap.to("#cardtwo",{
    x:10,
    duration: 1.6, // seconds
    delay: 0.1,
})
gsap.to("#bis",{
    x:10,
    duration: 1, // seconds
    delay: 0.1,
    rotate:360,
})
gsap.to("#bis2",{
    x:10,
    duration: 1.7, // seconds
    delay: 0.1,
    rotate:360
})
gsap.from(".logo",{
    y:-100,
    duration:1.7,
    delay:0.2,
})



var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    duration: 1.6,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      clickable: true,
    },
  });