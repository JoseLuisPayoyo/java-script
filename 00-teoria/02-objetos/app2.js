const producto = {
    nombre: "Monitor",
    precio: 29.99,
    mostrarInfo: function(){
        console.log(`El ${this.nombre} tiene un precio de ${this.precio}`);
    }
}

producto.mostrarInfo();

const producto2 = {
    nombre: "Teclado",
    precio: 19.99,
    mostrarInfo: function(){
        console.log(`El ${this.nombre} tiene un precio de ${this.precio}`);
    }
}
producto2.mostrarInfo();