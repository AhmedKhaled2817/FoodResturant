/*==================NAV LINK=================  */ 
const navLink=document.querySelectorAll('.nav__link');
function activeLink(){
  navLink.forEach((link)=>{
    link.classList.remove('active-link');
  })
  this.classList.add('active-link');
}
navLink.forEach((link)=>{
  link.addEventListener('click',activeLink);
});

/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
  navToggle.addEventListener('click',()=>{
    navMenu.classList.add('show-menu');
  })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
  navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu');
  })
}


/*=============== REMOVE MENU MOBILE ===============*/

/*=============== HOME SWIPER ===============*/
const homeSswiper = new Swiper('.home-swiper', {
    // Optional parameters
    spaceBetween:30,
    loop: true, 
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  

/*=============== DEALS TAB ===============*/
const tabs=document.querySelectorAll('[data-target]'),
      tabsContents=document.querySelectorAll('[content]');

      tabs.forEach((tab)=>{
        tab.addEventListener('click',()=>{

          // show the content
          const eventTarget=document.querySelector(tab.dataset.target);
          document.querySelector('.active-tab[content]')?.classList.remove('active-tab');
          eventTarget.classList.add('active-tab');

          // update active tab
          document.querySelector('.active-tab[data-target]')?.classList.remove('active-tab');
          tab.classList.add('active-tab'); 
        });

      });

/*=============== SHOW SCROLL UP ===============*/
function scrollUp(){
  const scrollUp=document.getElementById('scrollup');
  // when scroll is higher than 2350 viewport height, add the show__scroll-up class to the a tag with the scrollup class
  if (this.scrollY>=350){
    scrollUp.classList.add('show__scroll-up');
  }else{
    scrollUp.classList.remove('show__scroll-up');
  }
}

window.addEventListener('scroll',scrollUp);
