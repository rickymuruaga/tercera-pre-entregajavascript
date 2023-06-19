
const shopContent = document.getElementById("shopContent")


const productos = [ {
   
    id: 1,
    nombre: "Camiseta titular hombre",
    precio: 25000,
    img: "./images/CamisetaTitularHombre.webp"
    },

    {
     id: 2,
     nombre: "camiseta suplente mujer",
     precio: 20000,
     img:  "./images/CamisetaMujer.webp",
    },
   {
    id: 3,
    nombre: "short hombre",
    precio: 10000,
    img: "./images/short hombre.webp",
   },
 {
    id: 4,
    nombre: "Campera",
    precio: 35000,
    img: "./images/camperaAfa.webp",
    },
]



let carrito = [];



productos.forEach((product) => {
 let content = document.createElement("div")
 content.className = "card";
 content.innerHTML = `
   <img src="${product.img}">
   <h2>${product.nombre}<h2>
   <p class="preci">${product.precio} $<p>
 `; 
  
  shopContent.append(content);

  let comprar = document.createElement("button")
  comprar.innerText = "comprar";
  comprar.className = "compar";

  content.append(comprar);

  comprar.addEventListener("click", () => {
    carrito.push({
       id : product.id, 
       nombre : product.nombre,
       img: product.img,
       precio: product.precio,
      
    })
    console.log(carrito);
  })
  
});


localStorage.setItem("productosGuardados", JSON.stringify(productos));
let productosLS = JSON.parse(localStorage.getItem("productosGuardados"))
console.log(productosLS);
console.log(localStorage);

