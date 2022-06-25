function skiTrip(input) {
    let stayingDays = Number(input[0]);
    let roomType = input[1];
    let mark = input[2];

    let finalSum;

    if (mark == 'positive') {
        if (roomType == 'room for one person') {
            finalSum = (stayingDays - 1) * 18;
            finalSum = finalSum + (finalSum * 0.25);
            console.log(finalSum.toFixed(2));
        } else if (stayingDays < 10 && roomType == 'apartment') {
            finalSum = (stayingDays - 1) * 25;
            finalSum = finalSum + (finalSum * 0.25);
            finalSum = finalSum - (finalSum * 0.30);
            console.log(finalSum.toFixed(2));
        } else if (stayingDays >= 10 && stayingDays < 15 && roomType == 'apartment') {
            finalSum = (stayingDays - 1) * 25;
            finalSum = finalSum - (finalSum * 0.35);
            finalSum = finalSum + (finalSum * 0.25);
            console.log(finalSum.toFixed(2));
        } else if (stayingDays > 15 && roomType == 'apartment') {
            finalSum = (stayingDays - 1) * 25;
            finalSum = finalSum - (finalSum * 0.50);
            finalSum = finalSum + (finalSum * 0.25);
            console.log(finalSum.toFixed(2));
        } else if (stayingDays < 10 && roomType == 'president apartment') {
            finalSum = (stayingDays - 1) * 35;
            finalSum = finalSum - (finalSum * 0.10);
            finalSum = finalSum + (finalSum * 0.25);
            console.log(finalSum.toFixed(2));
        } else if (stayingDays >= 10 && stayingDays < 15 && roomType == 'president apartment') {
            finalSum = (stayingDays - 1) * 35;
            finalSum = finalSum - (finalSum * 0.15);
            finalSum = finalSum + (finalSum * 0.25);
            console.log(finalSum.toFixed(2));
        } else if (stayingDays > 15 && roomType == 'president apartment') {
            finalSum = (stayingDays - 1) * 35;
            finalSum = finalSum - (finalSum * 0.20);
            finalSum = finalSum + (finalSum * 0.25);
            console.log(finalSum.toFixed(2));
        }
    } else if (mark == 'negative') {
        if (roomType == 'room for one person') {
            finalSum = (stayingDays - 1) * 18;
            finalSum = finalSum - (finalSum * 0.10);
            console.log(finalSum.toFixed(2));
        } else if (stayingDays < 10 && roomType == 'apartment') {
            finalSum = (stayingDays - 1) * 25;
            finalSum = finalSum - (finalSum * 0.30);
            finalSum = finalSum - (finalSum * 0.10);
            console.log(finalSum.toFixed(2));
        } else if (stayingDays >= 10 && stayingDays < 15 && roomType == 'apartment') {
            finalSum = (stayingDays - 1) * 25;
            finalSum = finalSum - (finalSum * 0.35);
            finalSum = finalSum - (finalSum * 0.10);
            console.log(finalSum.toFixed(2));
        } else if (stayingDays > 15 && roomType == 'apartment') {
            finalSum = (stayingDays - 1) * 25;
            finalSum = finalSum - (finalSum * 0.50);
            finalSum = finalSum - (finalSum * 0.10);
            console.log(finalSum.toFixed(2));
        } else if (stayingDays < 10 && roomType == 'president apartment') {
            finalSum = (stayingDays - 1) * 35;
            finalSum = finalSum - (finalSum * 0.10);
            finalSum = finalSum - (finalSum * 0.10);
            console.log(finalSum.toFixed(2));
        } else if (stayingDays >= 10 && stayingDays < 15 && roomType == 'president apartment') {
            finalSum = (stayingDays - 1) * 35;
            finalSum = finalSum - (finalSum * 0.15);
            finalSum = finalSum - (finalSum * 0.10);
            console.log(finalSum.toFixed(2));
        } else if (stayingDays > 15 && roomType == 'president apartment') {
            finalSum = (stayingDays - 1) * 35;
            finalSum = finalSum - (finalSum * 0.20);
            finalSum = finalSum - (finalSum * 0.10);
            console.log(finalSum.toFixed(2));
        }
    }
}
skiTrip(["12",
"room for one person",
"positive"])