    const clickButton = document.querySelectorAll("button")

    clickButton.forEach(button =>{
        button.addEventListener ("click", addToCarrito)
    })

    const carritoCompra = document.getElementById("carritoCompra");
    
    let carrito = []
    
    function addToCarrito(e){
      const button = e.target
      const item = button.closest('.card')  
      const nombrePrenda = item.querySelector('.card-title').textContent;
      const precio = item.querySelector('.card-text').textContent;
      const imagen = item.querySelector('.card-img-top').src;
      
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
       console.log(carrito);
    }
    
    carritoCompra.addEventListener("click", () =>{
        carrito.push({

        })
   })
   
  

  
  
  
  
  
  
  
  
