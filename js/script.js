 let searchForm = document.querySelector('.search-form');
 document.querySelector('#search-btn').onclick = () =>
 {
    searchForm.classList.toggle('active')
    shoppingCart.classList.remove('active')
    loginForm.classList.remove('active')
    navbar.classList.remove('active');
 }


 let shoppingCart = document.querySelector('.shopping-cart');
 document.querySelector('#cart-btn').onclick = () =>
 {
        shoppingCart.classList.toggle('active');
        searchForm.classList.remove('active');
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
   
 }


 let loginForm = document.querySelector('.login-form');
 document.querySelector('#login-btn').onclick = () =>
 {
    loginForm.classList.toggle('active');
    signUpForm.classList.remove('active');  /* edit by mee  ..*/ 
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    navbar.classList.remove('active');
   
 }

//  ...................................................

    let signUpForm = document.querySelector('.signUp-form');
    document.querySelector('#signUp-btn').onclick =() =>{
        signUpForm.classList.toggle('active');
        loginForm.classList.remove('active');
        // signUpForm.classList.remove('active');  /* edit by mee  ..*/ 
        // searchForm.classList.remove('active')
        // shoppingCart.classList.remove('active')
        // navbar.classList.remove('active');

    }

     let loginForm2 = document.querySelector('.login-form');
     document.querySelector('#login-btn2').onclick = () =>
     {
        loginForm.classList.toggle('active');
        signUpForm.classList.remove('active');  /* edit by mee  ..*/ 
        searchForm.classList.remove('active')
        shoppingCart.classList.remove('active')
        navbar.classList.remove('active');
       
     }



//  ...................................................  


 let navbar = document.querySelector('.navbar');
 document.querySelector('#menu-btn').onclick = () =>
 {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    signUpForm.classList.remove('active');  /* edit by mee  ..*/ 
    
 }



 window.onscroll = () =>
 {
    searchForm.classList.remove('active')
    navbar.classList.remove('active');
    loginForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    signUpForm.classList.remove('active');  /* edit by mee  ..*/ 

     
 }



 var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
   autoplay: {
    delay:7500,
    disableOnInteraction: false, 
   },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
      },
    },
  }); 






  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
   autoplay: {
    delay:7500,
    disableOnInteraction: false, 
   },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1024: {
        slidesPerView: 3,
      },
    },
  }); 