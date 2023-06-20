export {dataFetch};
    
function dataFetch (){
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

function addToCarrito(product) {
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

createProducts();