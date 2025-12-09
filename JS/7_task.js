function promiseGreetings(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Welcome, ${name}!`);
        }, 3000);
    });
}

promiseGreetings("Omkar").then((greeting) => {
    document.writeln(greeting); // This will display after 3 seconds
});

promiseGreetings("to the webpage").then(function(greeting) {
    document.writeln(greeting); // This will display after 3 seconds
});
