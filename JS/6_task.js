function delayedGreetings(name, callback) {
    setTimeout(() => {
        callback(`Welcome, ${name}!`);
    },3000);
}

delayedGreetings("Omkar", (greeting) => {
    document.writeln(greeting); // This will display after 3 seconds
});

