const sidebar = document.querySelector(".sidebar")
const btn = document.querySelector(".button-items")
const menuList = document.querySelectorAll(".menu-list__items")
const tableBody = document.querySelector("#table-body")
const productsShow = document.querySelector("#nav-product")
const sectionHero =  document.querySelector(".hero-wrapperr")

btn.addEventListener("click" , () => {
    sidebar.classList.toggle("shrink")
    btn.classList.toggle("menu-show")
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

let products = JSON.parse(localStorage.getItem("products")) || [
    {
        id : 1,
        name : "Iphone 12",
        stock: 50,
        color: "white",
        price: 300,
    },
    {
        id : 2,
        name : "Iphone 15pro",
        stock: 20,
        color: "blue",
        price: 1000,
    },
    {
        id : 3,
        name : "Samsung S21",
        stock: 30,
        color: "black",
        price: 700,
    },
    {
        id: 4,
        name: "Xiaomi Mi 12",
        stock: 35,
        color: "blue",
        price: 600,
    },
    {
        id: 5,
        name: "Google Pixel 6",
        stock: 25,
        color: "black",
        price: 800,
    },
    {
        id: 6,
        name: "OnePlus 10",
        stock: 40,
        color: "silver",
        price: 900,
    },
    {
        id : 7,
        name : "Samsung A55",
        stock: 70,
        color: "gray",
        price: 200,
    },
    {
        id: 8,
        name: "Sony Xperia 5 III",
        stock: 15,
        color: "red",
        price: 1000,
    },
    {
        id: 9,
        name: "Huawei P50 Pro",
        stock: 50,
        color: "white",
        price: 1200,
    }

];
    
localStorage.setItem("products" ,JSON.stringify(products))



function renderUsers (){
    while(tableBody.firstChild){
        tableBody.removeChild(tableBody.firstChild)
    }
   

        if(products.length > 0){
            products.map(product => {
               
                const tr = document.createElement("tr")
                tr.innerHTML = `
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.stock}</td>
                    <td>${product.color}</td>
                    <td>${product.price}</td>
                `
    
                tr.innerHTML += `
                    <td class="button-wrapper">
                        <button data-product-id="${products.id}" class="done-btn"> Done </button>
                        <button data-product-id="${products.id}" class="delete-btn"> Delete </button>
                    </td>
                    `
                tableBody.append(tr)
            })
        }
        else{
            tableBody.innerHTML = "<td  colspan='15'>No userss found!</td>"
        }
    }
    

renderUsers()



tableBody.addEventListener("click" , (e) => {
        if(e.target.classList.contains("delete-btn")){
            
            if(confirm("Haqiqatdan o'chirmoqchimisiz?")){
                let id = e.target.dataset.productId;
                let indexOfDeleteElement = products.findIndex(products => products.id == id);
                products.splice(indexOfDeleteElement,1)
                localStorage.setItem("products", JSON.stringify(products))
                renderUsers()
                alert("O'chirildi!")
            }
            else{
                alert("O'chirish bekor qilindi!")
            }
        }
        if (e.target.classList.contains("done-btn")){
            let id = e.target.dataset.productId;
            let indexOfDeleteElement = products.findIndex(products => products.id == id);
            products.splice(indexOfDeleteElement, 1)
            
            
        }
        
    })


// productsShow.addEventListener("click" ,  () => {
//     // body.style. = "flex",/
//     console.log("salom");
// })