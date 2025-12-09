function counter(){
    // to return the incrementer and decremented value depending on the call
    let count = 0;
    return {
        increment: function(){
            count++;
            console.log(count);
            return count;
        },
        decrement: function(){
            count--;
            console.log(count);
            return count;
        }
    };
}
let myCounter = counter();
myCounter.increment();
myCounter.increment();
myCounter.decrement();
myCounter.increment();
myCounter.decrement();
myCounter.decrement();
