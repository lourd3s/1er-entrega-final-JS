let cart = [] // Array vacio ---> carrito 

class Prenda {
    constructor(id, title, price, stock, size) {
        this.id = id
        this.title = title
        this.price = price
        this.stock = stock
        this.talle = size
    }
    getId = function () {
        return this.id
    }
    getTotal = function (qty) {
        return this.price * qty
    }
    getCompra = function (qty) {
        return {
            product: this,
            quantity: qty,
            monto: this.getTotal(qty)
        } 
    }
    addToCart = function (qty) {
        cart.push(this.getCompra(qty))    // push: agrega al final del carrito 
    }
}

const prenda1 = new Prenda(1, 'Remera Eclipse', 3000, 30, 'XL')
const prenda2 = new Prenda(2, 'Campera Surgery', 6000, 20, 'M')
const prenda3 = new Prenda(3, 'Remera Mistery', 2500, 30, 'L')


prenda2.addToCart(2)
prenda1.addToCart(3)
prenda3.addToCart(5)

console.log(cart)

let resultadoBusqueda = cart.find( elemento => elemento.product.id === 1)

console.log(resultadoBusqueda)

let resultadoFilter = cart.filter( elemento => elemento.product.stock > 0)

console.log(resultadoFilter)

let resultadoMap = cart.map(elemento => {
    return elemento.product.id
})



