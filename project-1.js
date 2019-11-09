json = (require('./data')); 
////////////////////********Question #1 *************///////////////////////
//Function Expression
let check = function(array, number){
let flag = false;
    for(let i = 0 ; i< array.length ; i++){
        if(array[i] == number)
        // I stop the loop whenever I find the number no need to loop over.
        flag = true;
    }
    return flag;
} 
console.log(`check 3 in [1, 2, 3, 4, 5]: ${check([1, 2, 3, 4, 5], 3)}`);
console.log(`check 3 in [1, 1, 2, 1, 1]: ${check([1, 1, 2, 1, 1], 3)}`);
console.log(`check 5 in [5, 5, 5, 6]: ${check([5, 5, 5, 6], 5)}`);
console.log(`check 5 []: ${check([], 5)}`);
////////////////////********Question #2 *************///////////////////////

let convertToSeconds = function(hours, minutes){
let hoursToMinutes = hours * 60;
let hoursToSeconds = hoursToMinutes * 60;
let MinutesToSeconds = minutes * 60;
let totalToSeconds = MinutesToSeconds + hoursToSeconds;
return totalToSeconds;
}
console.log(`1 hour and 3 minutes in seconds are: ${convertToSeconds(1, 3)}`); // 3780
console.log(`2 hour and 0 minutes in seconds are: ${convertToSeconds(2, 0)}`); // 7200
console.log(`0 hour and 0 minutes in seconds are: ${convertToSeconds(0, 0)}`); // 0
////////////////////********Question #3 *************///////////////////////
var  aquarium = {
    filledWithWater: true,
    capacityInGallons: 12,
    numberOfRocks: 5,
    fish: [
            {
                type: 'goldfish' ,
                size: '3.5 inches',
                color: 'golden'
            },
            {
                type: 'puffer',
                size: '4 inches',
                color: 'tan'
            },
            {
                type: 'clown',
                size: '3 inches',
                color: 'orange'
            }
        ]
}

// 1. access the value of the `capacityInGallons` key
console.log(`Accessing capacityInGallons: ${aquarium.capacityInGallons}`);
// OR:
// console.log(aquarium["capacityInGallons"]);
// 2. add 2 rocks to the `numberOfRocks` in the aquarium
aquarium.numberOfRocks = aquarium.numberOfRocks + 2;
console.log(` add 2 rocks to the numberOfRocks: ${aquarium.numberOfRocks}`);

// 3. access the `clown fish` and `print` the object.
console.log("access the clown fish:");
console.log(aquarium.fish[2]);
// Or:
//type: ${aquarium.fish[2].type} size: ${aquarium.fish[2].size} color: ${aquarium.fish[2].color}`);

// 4. access the `size` of the `puffer` fish.
console.log(`the size of the puffer fish is: ${aquarium.fish[1].size}`);

// 5. your `goldfish` grew! Access the `size` key of goldfish and reassign it to '4 inches'.
aquarium.fish[0].size = '4 inches';
console.log(`the size of the goldfish fish is: ${aquarium.fish[0]["size"]}`);

// 6. you bought a new fish! Make a new object for a '5 inch' long, blue starfish and add it to the fish array.
let starfish = {
    type: 'starfish',
    size: '5 inches',
    color: 'blue'
};
aquarium.fish.push(starfish);
console.log(aquarium.fish[3]);
