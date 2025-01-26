let header=document.querySelectorAll(".main_contanier_cart_item_header")
header.forEach((item)=>{
    item.addEventListener('click',()=>{
        item.classList.toggle("active")
    })
})