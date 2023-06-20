let carrito = [];


export function dataFetch (){
    return new Promise((resolve, rejected) => {
        let loadingDiv = document.createElement("div");
    
    shopContent.append(loadingDiv);
    setTimeout (() => {
        fetch("./js/productos.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("not ok");
            } 
            return response.json()
        })
        .then((data) => {
            loadingDiv.remove();
            resolve(data);
        })
        .catch((error) => {
            loadingDiv.innerHTML = "Ocurrio un error";
            console.error(error);
            loadingDiv.classList.add("error");
            rejected(error);
        });
    }, 2000);
    
    });
}

function productosEnCarrito(product) {
    return carrito.some((item) => item.id === product.id);
}



export function addToCarrito(product) {
    Toastify({
        text: "Producto agregado",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right,#00cef5, #00cef5)",
          borderRadius: "2 rem",
          textTransform: "uppercase",
          fontSize: "0.75 rem",
        },
        offset: {
            x: "1.5 rem", // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: "1.5 rem" // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },


        onClick: function(){} // Callback after click
      }).showToast();
    if (!productosEnCarrito(product)){
        carrito.push({
            id: product.id,
            nombre: product.nombre,
            img: product.img,
            precio: product.precio,
        });
        console.log("producto añadido al carrito:", product);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    } else {
        console.log("Producto ya añadido:", product);
    }
}

function loadCarritoFromLocalStorage(){
    const carritoData = localStorage.getItem("carrito");
    if (carritoData){
        carrito = JSON.parse(carritoData);
    }
}

loadCarritoFromLocalStorage();

