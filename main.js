const productos = [
  {
    id: 1,
    nombre: "Camiseta titular hombre",
    precio: 25000,
    img: "https://images.app.goo.gl/iznmXmADyScRCpYH9",
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
];

//traer html
const shopContent = document.getElementById("shopContent");
let agregar = document.querySelectorAll(".comprar");

let carrito = [];

//hago una funcion para mostrar los productos por DOM
function mostrarProductos(productosEnVenta) {
  productosEnVenta.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    <div class="pd-descripcion">
        <h3 class="producto-titulo">${producto.nombre}</h3>
        <p class="producto-precio">$${producto.precio}</p>
        <button id="${producto.id}" class="comprar">Agregar</button>
    </div>
    `;

    shopContent.append(div);
  });

  agregarEvento();
}

//Llamo a la funcion
mostrarProductos(productos);

function agregarEvento() {
  agregar = document.querySelectorAll(".comprar");

  agregar.forEach((boton) => {
    boton.addEventListener("click", agregoAlCarro);
  });
}

function agregoAlCarro(e) {
  const idDelBoton = e.currentTarget.id;

  let productoAgregado = productos.find(
    (producto) => producto.id == idDelBoton
  );

  carrito.push(productoAgregado);
  console.log(carrito);

  localStorage.setItem("productoAgregado", JSON.stringify(carrito));
}
