let j;

for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

// *
// **
// ***
// ****
// *****

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        console.log("*");
    }
}
