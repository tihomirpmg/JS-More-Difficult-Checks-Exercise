function newHouse(input) {
    let type = input[0];
    let count = Number(input[1]);
    let budget = Number(input[2]);

    let sum = 0;

    switch (type) {
        case "Roses": {
            sum = count * 5;
            if (count > 80) {
                sum *= 0.9;
            }
        }; break;

        case "Dahlias": {
            sum = count * 3.8;
            if (count > 90) {
                sum *= 0.85;
            }
        }; break;
        case "Tulips": {
            sum = count * 2.8;
            if (count > 80) {
                sum *= 0.85;
            }
        }; break;
        case "Narcissus": {
            sum = count * 3;
            if (count < 120) {
                sum *= 1.15;
            }
        }; break;
        case "Gladiolus": {
            sum = count * 2.5;
            if (count < 80) {
                sum *= 1.2;
            }
        }; break;
    }
    let diff = Math.abs(sum - budget);

    if (sum > budget) {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    } else {
        console.log(`Hey, you have a great garden with ${count} ${type} and ${diff.toFixed(2)} leva left.`)
    }
}
newHouse(["Roses",
"55",
"250"])
