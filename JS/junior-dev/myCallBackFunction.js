
let C = areaOfCircle
let R = areaOfRectangle 
let T = areaOfTriangle 

  const areaOfRectangle =(l,w) => {
    return l*w
    console.log(`R, typeof is ${areaOfRectangle}`)
}
 const areaOfCircle =(r) =>{
    return 3.142*r*r
    console.log (`C is ${areaOfCircle}`)
}
const areaOfTriangle =(b,h)=>{
    return 0.5*b*h
    console.log(`T is ${areaOfTriangle}`)
}

function shape(shapeFunction, shapeName, side1, side2, side3) {
    console.log(`shapeFunction ${shapeFunction} its ${typeof shapeFunction}`);
    console.log(`shapeName ${shapeName} its ${typeof shapeName}`);
    console.log(`side1 ${side1} its ${typeof side1}`);
    console.log(`side2 ${side2} its ${typeof side2}`);
    console.log(`side3 ${side3} its ${typeof side3}`);
    const result = shapeFunction(side1, side2,side2);
    console.log(`For shape${shapeName} Area is ${result}`);
    return result;
}
    