const sidebar = document.querySelector(".sidebar")
const btn = document.querySelector(".button-items")
const account =  document.querySelector(".account")
const menuList = document.querySelectorAll(".menu-list__items")

btn.addEventListener("click" , () => {
    sidebar.classList.toggle("shrink")
    btn.classList.toggle("menu-show")
    account.classList.add("menu-show")
})

menuList.forEach(item => {
    item.addEventListener("click", () => {
        menuList.forEach(item => {
            item.style.borderLeft = "2px solid transparent"
            item.style.color = "#ffffff80"
        
        })
        item.style.borderLeft = "2px solid #fff"
        item.style.color = "#fff"
    })
})

