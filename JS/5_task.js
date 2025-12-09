//id generator

function generateId() {
    let id = 0;
    return function() {
        id++;
        return ("ID"+id);
    };
}

let getId = generateId();
console.log(getId());
console.log(getId());
console.log(getId());
console.log(getId());
console.log(getId());
console.log(getId());
console.log(getId());