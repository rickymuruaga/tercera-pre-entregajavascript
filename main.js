    const clickButton = document.querySelectorAll("button")

    clickButton.forEach(button =>{
        button.addEventListener ("click", addToCarrito)
    })
    
    let carrito = []
    
    function addToCarrito(e){
      const button = e.target
      const item = button.closest('.card')  
      const nombrePrenda = item.querySelector('.card-title').textContent;
      const precio = item.querySelector('.card-text').textContent;
      const imagen = item.querySelector('.card-img-top').src;
      console.log(imagen);
        
      const newItem = {
        titulo: nombrePrenda,
        precio: precio,
        imagen: imagen,
        cantidad: 1,
    
    }
     addItemCarrito(newItem)
 }
     
    function addItemCarrito(newItem){
        carrito.push(newItem)
        renderCarrito()
       
    }

    function renderCarrito (){
        console.log(carrito)
    }
    
   
  /* const product = [
        {  id: 1, nombre: "Camiseta titular Hombre", precio: 22.500}, 
        {  id: 2, nombre: "Short Hombre", precio: 10.000},  
        {  id: 3, nombre: "Camiseta suplente Mujer", precio: 20.000},  
        {  id: 4, nombre: "Short niño", precio: 8.000}
        ]; 
      */
     
    
   /*  productos.forEach((product) => {
    let product = document.createElement("div");
    product.innerHTML = `
        <h3=${product.nombre}">
        <p= ${product.precio}">
    `;
    
    tienda.append(productos)

    }
    );

  carrito.push    */