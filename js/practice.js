const smashers = ["Mario", "Donkey Kong", "Link", "Samus","Dark Samus", "Yoshi", "Kirby", "Fox", "Pikachu", "Luigi", "Ness", "Captain Falcon", "Jigglypuff",     "Peach", "Daisy", "Bowser", "Ice Climbers", "Sheik", "Zelda", "Dr. Mario", "Pichu", "Falco", "Marth", "Lucina", "Young Link", "Ganondorf", "Mewtwo", "Roy", "Chrom", "Mr. Game & Watch", "Meta Knight", "Pit", "Dark Pit", "Zero Suit Samus", "Wario", "Snake", "Ike", "Pokemon Trainer", "Squirtle", "Ivysaur", "Charizard", "Diddy Kong", "Lucas", "Sonic", "King Dedede", "Olimar", "Lucario", "R.O.B.", "Toon Link", "Wolf", "Villager", "Mega Man", "Wii Fit Trainer", "Rosalina & Luma", "Little Mac", "Greninja", "Mii Brawler", "Mii Swordfighter", "Mii Gunner", "Palutena", "Pac-Man", "Robin", "Shulk", "Bowser Jr.", "Duck Hunt", "Ryu", "Ken", "Cloud", "Corrin", "Bayonetta", "Inkling", "Ridley", "Simon", "Richter", "King K. Rool", "Isabelle", "Incineroar", "Piranha Plant", "Joker", "Hero", "Banjo & Kazooie", "Terry", "Byleth", "Min Min", "Steve", "Sephiroth", "Pyra", "Mythra", "Kazuya", "Sora"];

const smasher = smashers.map(smasher => smasher.random);
console.log(smasher);
const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];
const  mileages = cars.map(car => car.mileage);
// console.log(mileages);
// console.log(Math.max(...cars.map(car=>car.mileage)));

const  lowMileages = cars.filter(car=> car.mileage < 10000);

// console.log(lowMileages);

lowMileages.forEach(car => {
    const carPar = document.createElement("p");
    carPar.innerText = `I found a ${car.make} ${car.model} with ${car.mileage} miles.`;
    // console.log(carPar);
})



let prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
const  totalPrice = prices.reduce(function(sumSoFar, currentPrice){
    console.log(sumSoFar + ", " + currentPrice);
    return sumSoFar + currentPrice;
}, 0);
console.log(totalPrice);
function  findMaxPrice(maxSoFar, currentPrice) {
    if (currentPrice > maxSoFar) {
        return currentPrice;
    }
    return maxSoFar;
}
const  maxPrice = prices.reduce(findMaxPrice, prices[0]);
console.log(maxPrice);



function findLowestMileage (lowestSoFar, currentCar) {
    if (currentCar.mileage < lowestSoFar.mileage) {
        return currentCar;
    }
    return lowestSoFar;
}
const lowestMileageCar = cars.reduce(findLowestMileage, cars[0]);
console.log(lowestMileageCar);