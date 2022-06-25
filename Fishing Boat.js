function boat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherCount = Number(input[2]);

    let discount = 0;
    let finalPrice = 0;

    switch (season) {
        case 'Spring': boatPrice = 3000;
            break;
        case 'Summer': boatPrice = 4200;
            break;
        case 'Autumn': boatPrice = 4200;
            break;
        case 'Winter': boatPrice = 2600;
            break;
        default: '';
    }

    if (fisherCount <= 6) {
        discount = 0.10;
    } else if (fisherCount <= 11) {
        discount = 0.15;
    } else {
        discount = 0.25;
    }
    finalPrice = boatPrice - (boatPrice * discount);
    if (fisherCount % 2 == 0 && season !== 'Autumn') {
        finalPrice *= 0.95;
    }
    if (budget >= finalPrice) {
        console.log(`Yes! You have ${(budget - finalPrice).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${Math.abs(budget - finalPrice).toFixed(2)} leva.`)
    }
}
boat(["3000",
"Summer",
"11"])
