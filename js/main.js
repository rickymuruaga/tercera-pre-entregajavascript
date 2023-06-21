import{dataFetch,  addToCarrito} from "./carrito.js"


const shopContent = document.getElementById("shopContent")


async function createProducts() {
 try{
  const fetchedData = await dataFetch();

  fetchedData.forEach((product) => {
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




