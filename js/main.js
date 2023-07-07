import{dataFetch,  addToCarrito} from "./carrito.js"


const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalcontainer = document.getElementById("modal-container");  



let carrito = [];



async function createProducts() {
 try{
  const fetchData = await dataFetch();

  fetchData.forEach((product) => {
 let content = document.createElement("div")
 content.className = "card";
 content.innerHTML = `
   <img src="${product.img}">
   <h3>${product.nombre}<h2>
   <p class="precio">${product.precio} $<p>
 `; 
 
  
  shopContent.append(content);

  let comprar = document.createElement("button")
  comprar.innerText = "comprar";
  comprar.className = "comprar";
 
  

  content.append(comprar);

  comprar.addEventListener("click", () => {
    addToCarrito(product);
    });
   });
  
} catch (error){
  
  console.log(error);
}
} 

createProducts();

  
 /* CREANDO EL MODAL */

 verCarrito.addEventListener("click", () => {
  const modal = document.createElement("div");
  modal.className = "modal"
  modal.innerHTML = `
    <h1 class="modal-title">carrito.</h1>;  
  `
  modalcontainer.append(modal);

  const modalbutton = document.createElement("h1");
  modalbutton.innerText= "X";
  modalbutton.className= "modalbutton";

  modal.append(modalbutton)
 })

 
  carrito.forEach((product) => {
    let carritoContent = document.createElement("div")
    carritoContent.className = "modal"
    carritoContent.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}<h2>
    <p>${product.precio} $<p>
    
    `;
   modalcontainer.append(carritoContent);
  });

  
  
  