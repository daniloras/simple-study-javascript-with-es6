/**
 * operator SPREAD
 */

// aplication 1

const arrayExemple1 = [1, 2, 3];
const arrayExemple2 = [4, 5, 6];

const arrayExemple3 = [...arrayExemple1, ...arrayExemple2];

console.log(arrayExemple3); //  [1, 2, 3, 4, 5, 6]

// aplication 2

const talent = {
  name: "Danilo",
  company: "Matchbox",
};
const talent2 = { ...talent, name: "Danilo Ramon" };

console.log(talent2); // {name: "Danilo Ramon", company: "Matchbox"}
