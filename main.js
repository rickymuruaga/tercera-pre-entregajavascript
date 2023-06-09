const shopContent = document.getElementById("shopContent")

const productos = [ {
   
    id: 1,
    nombre: "Camiseta titular hombre",
    precio: 25000,
    img: "https://images.app.goo.gl/Y5j9VPYP2rF35xPc7",
    },

    {
     id: 2,
     nombre: "camiseta suplente mujer",
     precio: 20000,
     img: "https://images.app.goo.gl/M8VFUMafqsZ9Cjr66",
    },
   {
    id: 3,
    nombre: "short hombre",
    precio: 10000,
    img: "https://images.app.goo.gl/6CfvKUiF5XdpaRbK7",
   },
 {
    id: 4,
    nombre: "Campera",
    precio: 35000,
    img: "https://images.app.goo.gl/wA4yeZ88DWyp1xZy8",
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

let productosLocalStorage = JSON.stringify(productos);
localStorage.setItem('productosGuardados', productosLS);

let productosLS = localStorage.getItem("productosGuardados")

if(productosLS !== null){
  let productos = JSON.parse("productosGuardados")
}

