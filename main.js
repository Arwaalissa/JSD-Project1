json = (require('./data')); 
////////////////////********Question #4 *************///////////////////////

// 4. Write a function that `console.logs` each character object in the data.
// console.log(json);
let jsonObj = JSON.parse(json);
let logData = function() {
    for(let i=0; i < jsonObj.people.length; i++){
        console.log(jsonObj.people[i]);
    }
}
logData();

// 5. Write a function that `console.logs` each character's `name`

let logNames = function() {
    for(let i=0; i< jsonObj.people.length; i++){
        console.log(jsonObj.people[i].name);
    }
};
logNames();

// 6. Write a function that `console.logs` each character's `name` and `eye color`

let logNameEyes = function() {
    for(let i=0; i< jsonObj.people.length; i++){
        console.log(`name: ${jsonObj.people[i].name}, eye color: ${jsonObj.people[i].eye_color}`);
    }
};
logNameEyes();
// 7. Write a function that `console.logs` each character's name whose `mass` is greater than 75

let logByMass = function() {
    for(let i=0; i< jsonObj.people.length; i++){
        if(jsonObj.people[i].mass > 75){
            console.log(`character's name whose mass is greater than 75: ${jsonObj.people[i].name}`);

        }
    }
};
logByMass();

