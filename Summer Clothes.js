function summerOutfit(input) {
    let degrees = Number(input[0]);
    let dayOrNight = input[1];
    let outfit;
    let shoes;

    if (degrees >= 10 && degrees <= 18) {
        if (dayOrNight == 'Morning') {
            outfit = 'Sweatshirt';
            shoes = 'Sneakers';
        } else if (dayOrNight == 'Afternoon' || dayOrNight == 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    }
    else if (degrees > 18 && degrees <= 24) {
        if (dayOrNight == 'Morning' || dayOrNight == 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if (dayOrNight == 'Afternoon') {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        }
    } else if (degrees >= 25) {
        if (dayOrNight == 'Morning') {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        } else if (dayOrNight == 'Afternoon') {
            outfit = 'Swim Suit';
            shoes = 'Barefoot';
        } else if (dayOrNight == 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(["16",
    "Morning"])
