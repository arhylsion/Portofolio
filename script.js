
  AOS.init({offset:0});
      
  // Navbar dropdown hamburger
    function hamburg(){
      const navbar = document.querySelector(".dropdown")
      navbar.style.transform = "translateY(0px)"
    }
    function cancel(){
      const navbar = document.querySelector(".dropdown")
      navbar.style.transform = "translateY(-500px)"
    }
