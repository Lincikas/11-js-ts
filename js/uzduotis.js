//1)
let a = 18;
let b = 13;

if (a > b) {
  console.log("a yra didesnis už b");
} else if (a < b) {
  console.log("b yra didesnis už a");
} else {
  console.log("a ir b yra lygūs");
}
//2
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
//3
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
  }
//4
for (let i = 0; i < 5; i++) {
    let skaicius = Math.floor(Math.random() * 10) + 1;
    console.log(skaicius);
  }
//5
let skaicius = 0;

while (skaicius !== 5) {
  skaicius = Math.floor(Math.random() * 10) + 1;
  console.log(skaicius);
}
//6
let masyvoIlgis = Math.floor(Math.random() * 11) + 20;
let masyvas = [];

for (let i = 0; i < masyvoIlgis; i++) {
  masyvas.push(Math.floor(Math.random() * 21) + 10);
}

let didziausiaReiksme = masyvas[0];

for (let i = 1; i < masyvas.length; i++) {
  if (masyvas[i] > didziausiaReiksme) {
    didziausiaReiksme = masyvas[i];
  }
}

console.log("Masyvo ilgis:", masyvas.length);
console.log("Masyvas:", masyvas);
console.log("Didžiausia reikšmė:", didziausiaReiksme);
//7
let array = [];
let raidziuKiekis = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
};

for (let i = 0; i < 100; i++) {
  let atsitiktinisSkaicius = Math.floor(Math.random() * 4);
  let atsitiktineRaide = String.fromCharCode(65 + atsitiktinisSkaicius);
  masyvas.push(atsitiktineRaide);
  raidziuKiekis[atsitiktineRaide]++;
}

console.log("Masyvas:", masyvas);
console.log("Kiekis A raidžių:", raidziuKiekis["A"]);
console.log("Kiekis B raidžių:", raidziuKiekis["B"]);
console.log("Kiekis C raidžių:", raidziuKiekis["C"]);
console.log("Kiekis D raidžių:", raidziuKiekis["D"]);
//8
function lygineSuma(a, b) {
    if (typeof a === 'number' && typeof b === 'number') { // jei abu parametrai skaičiai
      const suma = a + b;
      return suma % 2 === 0 ? suma : 'suma nelyginė';
    } else if (Array.isArray(a) && Array.isArray(b)) { // jei abu parametrai masyvai
      const suma = a.length + b.length;
      return suma % 2 === 0 ? suma : 'suma nelyginė';
    } else { // kitu atveju - blogi parametrai
      return 'klaidingi parametrai';
    }
  }
//9  