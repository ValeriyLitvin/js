// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const item of this.potions) {
//       if (item.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     const newProduct = {
//       ...newPotion,
//     };
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions());

// class Car {
//   constructor({ brand, model, price }) {
//     this._brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   get brand() {
//     return this._brand;
//   }
//   //   changeBrand(newBrand) {
//   //     this.brand = newBrand;
//   //   }
// }

// const carInstruction = new Car({
//   brand: "Audi",
//   price: 30000,
//   model: "Q-5",
// });
// console.log(carInstruction);

class User {
  // Деструктуризуємо об'єкт
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
}

const mango = new User({
  name: "Манго",
  email: "mango@mail.com",
});
console.log(mango); // { name: "Манго", email: "mango@mail.com" }

const poly = new User({
  name: "Поли",
  email: "poly@mail.com",
});
console.log(poly); // { name: "Поли", email: "poly@mail.com" }
