const calcularFactura = () => {

    const producto = document.getElementById("producto").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const cantidad = parseInt(document.getElementById("cantidad").value);

    if (producto === "" || isNaN(precio) || isNaN(cantidad) || precio <= 0 || cantidad <= 0 || !Number.isInteger(cantidad)) {
        alert("Ingrese los datos correctamente");
        return;
    }

    const subtotal = precio * cantidad;

    document.getElementById("resultado").textContent =
        "Producto: " + producto +
        " | Precio: $" + precio.toFixed(2) +
        " | Cantidad: " + cantidad +
        " | Total: $" + subtotal.toFixed(2);
};
