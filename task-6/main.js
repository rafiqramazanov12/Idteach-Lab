let header_btn = document.querySelector(".header_btn")
let header_navbar = document.querySelector(".header_navbar")
let header_x = document.querySelector(".header_list_btn_icon")
let header_navbar_menu_item=document.querySelectorAll(".header_navbar_menu_item")
header_btn.addEventListener("click", function () {
    header_navbar.classList.add("active")


})

header_x.addEventListener("click", function () {
    header_navbar.classList.remove("active")


})



