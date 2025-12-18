export const areaCircle = (radius) =>{
    const area = radius*radius*Math.PI;
    return(area);
};

export const perimeterCircle = (radius) =>{
    const peri = 2*Math.PI*radius;
    return(peri);
};

const formula = {
    formulaArea: "PI*R*R",
    formulaPeri: "PI*2*R",
};

export default formula;
