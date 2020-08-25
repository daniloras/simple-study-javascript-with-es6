/**
 * destructions
 */

const users = {
  name: "Danilo",
  age: 36,
  address: {
    city: "São Bernardo do Campo",
    uf: "SP",
  },
};

// mode incorrect
var name = users.name;
var age = users.age;
var city = users.address.city;

// mode correct
var {
  name,
  age,
  address: { city },
} = users;

console.log(name, age, city); // Danilo 36 São Bernardo do Campo

function showCustom({ name, age, address: { city } }) {
  console.log(name, age, city);
}

showCustom(users); // Danilo 36 São Bernardo do Campo
