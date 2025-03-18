let dogname = "Mr. Rover";
let dogWeight = 23;
if (dogWeight > 20) {
    console.log(dogName + " says woof woof bark bark");
}
else {
    console.log(dogname + " says woof woof");
}

dogname = "Soike";
dogWeight = 17;
if (dogWeight > 20) {
    console.log(dogName + " says woof woof bark bark");
}
else {
    console.log(dogname + " says woof woof");
}

dogname = "Vieron el perro?";
dogWeight = 51;
if (dogWeight > 20) {
    console.log(dogName + " says woof woof bark bark");
}
else {
    console.log(dogname + " says woof woof");
}

dogname = "Lady";
dogWeight = 20;
if (dogWeight > 20) {
    console.log(dogName + " says woof woof bark bark");
}
else {
    console.log(dogname + " says woof woof");
}

//

function bark(name, weight) {
    if (weight > 20) {
    console.log(name + " says woof woof");
    }
    else {
        console.log(name + " says WOOF WOOF");
    }
}

bark("Rover", 23);
bark("Spot", 13);
bark("Spike", 53);
bark("Lady", 17);