import formula,{areaCircle, perimeterCircle} from './geometry.js'

const radius = 10;

console.log(`Current Radius: ${radius}`);
console.log(`Area Formula: ${formula.formulaArea}  Area: ${areaCircle(radius)}`);
console.log(`Perimeter Formula: ${formula.formulaPeri}  Perimeter: ${perimeterCircle(radius)}`);
