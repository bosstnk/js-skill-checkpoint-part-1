// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let minQuantityProduct = inventory[0];
for (let item of inventory) {
  if (minQuantityProduct.quantity > item.quantity) {
    minQuantityProduct = item
  }
}

console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minQuantityProduct.name} ซึ่งมี ${minQuantityProduct.quantity} ชิ้น`)