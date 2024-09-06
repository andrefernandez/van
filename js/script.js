const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        navLinks.forEach((hLink)=>{
            hLink.classList.remove("active");
        })
        link.classList.add("active");
    })
})

$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:true,
    arrows: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
    ]
  });

    function getNextSlide(currentSlide) {
        var nextSlide = currentSlide.nextElementSibling;
        if (!nextSlide || !nextSlide.classList.contains('slick-slide')) {
          nextSlide = currentSlide.parentElement.querySelector('.slick-slide');
        }
        return nextSlide;
      }
    
      $(slider).on('afterChange', function(event, slick, currentSlideIndex) {
        var currentSlide = slick.$slides.get(currentSlideIndex);
        var nextSlide = getNextSlide(currentSlide);
        if(window.innerWidth > 768){
            document.querySelectorAll(".slide").forEach((slide)=>{
                slide.classList.remove('slide-active');
                slide.querySelector(".quote").src = "images/quote-color.png";
            })
            console.log(nextSlide);
            nextSlide.classList.add('slide-active');
            nextSlide.querySelector(".quote").src = "images/quote-white.png";
        }
        else{
            document.querySelectorAll(".slide").forEach((slide)=>{
                slide.classList.remove('slide-active');
                slide.querySelector(".quote").src = "images/quote-color.png";
            })
        }
      });

window.addEventListener("scroll",()=>{
    if(window.scrollY > 100){
        document.querySelector(".navbar").style.background = "#fff";
    }
    else{
        document.querySelector(".navbar").style.background = "transparent";
    }
})

let heroTl = new gsap.timeline();
heroTl.from(".navbar",{
    opacity: 0,
    delay: 1,
    duration: 0.7,
    y: -50,
})
heroTl.from([".hero .row .text-col h1", ".hero .row .text-col p, .btn-hero,.hero-vector"],{
    opacity: 0,
    delay: 1,
    duration: 0.5,
    stagger: 0.3,
    y: 30,
})
heroTl.from(".hero-img",{
    opacity: 0,
    delay: 0.8,
    scale: 0,
    duration: 0.5,
    stagger: 0.3,
    y: 30,
})
heroTl.from([".top-left, .bottom-left, .top-right"],{
    opacity: 0,
    delay: 0.8,
    scale: 0,
    duration: 0.5,
    stagger: 0.3,
})

gsap.from("#differences .container",{
    opacity: 0,
    delay: 0.8,
    duration: 0.5,
    y: 60,
    scrollTrigger:{
        trigger: "#differences",
    }
})

gsap.from("#benefits .container",{
    opacity: 0,
    delay: 0.8,
    duration: 0.5,
    y: 60,
    scrollTrigger:{
        trigger: "#benefits",
    }
})

gsap.from("#steps .container",{
    opacity: 0,
    delay: 0.8,
    duration: 0.5,
    y: 60,
    scrollTrigger:{
        trigger: "#steps",
    }
})

gsap.from("#how .container",{
    opacity: 0,
    delay: 0.8,
    duration: 0.5,
    y: 60,
    scrollTrigger:{
        trigger: "#how",
    }
})

gsap.from("#hub .container",{
    opacity: 0,
    delay: 0.8,
    duration: 0.5,
    y: 60,
    scrollTrigger:{
        trigger: "#hub",
    }
})

gsap.from("#inspire .container",{
    opacity: 0,
    delay: 0.8,
    duration: 0.5,
    y: 60,
    scrollTrigger:{
        trigger: "#inspire",
    }
})

gsap.from("#slider .container",{
    opacity: 0,
    delay: 0.8,
    duration: 0.5,
    y: 60,
    scrollTrigger:{
        trigger: "#slider",
    }
})

gsap.from("#insta-grid .container",{
    opacity: 0,
    delay: 0.8,
    duration: 0.5,
    y: 60,
    scrollTrigger:{
        trigger: "#insta-grid",
    }
})

gsap.from("#faq .container",{
    opacity: 0,
    delay: 0.8,
    duration: 0.5,
    y: 60,
    scrollTrigger:{
        trigger: "#faq",
    }
})

gsap.from("#footer .container",{
    opacity: 0,
    delay: 0.8,
    duration: 0.5,
    y: 60,
    scrollTrigger:{
        trigger: "#footer",
    }
})