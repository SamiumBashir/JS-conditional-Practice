const phones = [
  { name: "Samsung", price: 115000, camera: "12 mp", color: "black" },
  { name: "Nokia", price: 48000, camera: "12 mp", color: "black" },
  { name: "Apple", price: 125000, camera: "12 mp", color: "black" },
  { name: "Motorola", price: 55000, camera: "12 mp", color: "black" },
  { name: "OnePlus", price: 78000, camera: "12 mp", color: "black" },
  { name: "Oppo", price: 45000, camera: "12 mp", color: "black" },
];

function getExpensivePhone(phones) {
  let max = phones[0];

  for(let phone of phones){
    if (phone.price > max.price){
        max = phone;
    }
  }
  return max;
}

const expensive = getExpensivePhone(phones);
console.log(expensive);
