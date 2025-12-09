function asyncGreetings(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Welcome, ${name}!`);
        }, 3000);
    });
}

async function displayGreetings() {
    const greeting1 = await asyncGreetings("Omkar");
    document.writeln(greeting1); // This will display after 3 seconds
    const greeting2 = await asyncGreetings("to the webpage");
    document.writeln(greeting2); // This will display after another 3 seconds
}
displayGreetings();
