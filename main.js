const clickButton = document.querySelectorAll("button")




const tienda = document.getElementById("tienda")



const productos = [
    {  id: 1, nombre: "Camiseta titular Hombre", precio: 22.500}, 
    {  id: 2, nombre: "Short Hombre", precio: 10.000},  
    {  id: 3, nombre: "Camiseta suplente Mujer", precio: 20.000},  
    {  id: 4, nombre: "Short niño", precio: 8.000}
    ];
    
    
    let carrito = []
    
    productos.forEach((product) => {
    let productos = document.createElement("div");
    productos.innerHTML = `
        <h3=${producto.nombre}">
        <p= ${producto.precio}">
    `;
    
    tienda.append(productos)

    }
    );

  carrito.push