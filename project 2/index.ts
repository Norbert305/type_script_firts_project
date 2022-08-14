import products from './products';

const productName : string = 'fanny pack'

let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

const shippingAddress: string = '575 Broadway, New York City, New York';


const product = products.filter((value)=>{
    return value.name === productName
})[0]

if (product.preOrder === true) {
    console.log('We will send you a message when your product is on its way.');
}

if (Number(product.price) > 25) {
  console.log("We provide free shipping for this product")
  shipping = 0 
}
else {
  shipping = 5
}

if (shippingAddress.match('New York')) {
    taxPercent = 0.1
}
else {
  taxPercent = 0.05
}

taxTotal = Number(product.price) * taxPercent

total = Number(product.price) + taxTotal + shipping 

let theProducPrice = (Number(product.price))

console.log(productName)
console.log(shippingAddress)
console.log(theProducPrice)
console.log(taxTotal)
console.log(shipping)
console.log(total)