var menu_toggler = document.getElementById("menu-toggler");
var site_navbar = document.getElementById("site-navbar");
//console.log("scripted loaded");
menu_toggler.addEventListener ( "click" ,function(){
    //console.log("clicked");
    site_navbar.classList.toggle("show");
    
}
);



