var toggleButton=document.querySelector(".toggle-button");toggleButton.classList.remove("toggle-button--toggle-on");var navigation=document.querySelector(".header__links-wrap");navigation.classList.remove("header__links-wrap--opened"),toggleButton.addEventListener("click",function(o){o.preventDefault(),toggleButton.classList.toggle("toggle-button--toggle-on"),navigation.classList.toggle("header__links-wrap--opened")});var searchButton=document.querySelector(".search"),searchModal=document.querySelector(".modal"),closeModalButton=document.querySelector(".modal__button");function closeModalHandler(){searchModal.classList.remove("modal--open"),document.body.style.overflow="auto",closeModalButton.removeEventListener("click",closeModalHandler)}searchButton.addEventListener("click",function(o){o.preventDefault(),searchModal.classList.add("modal--open"),document.body.style.overflow="hidden",closeModalButton.addEventListener("click",closeModalHandler)});var scrollTopButton=document.querySelector(".button-scroll");function scrollToTop(){window.scrollTo(0,0)}window.addEventListener("scroll",function(){470<=window.pageYOffset?(scrollTopButton.style.display="inline-block",scrollTopButton.addEventListener("click",scrollToTop)):(scrollTopButton.style.display="none",scrollTopButton.removeEventListener("click",scrollToTop))});