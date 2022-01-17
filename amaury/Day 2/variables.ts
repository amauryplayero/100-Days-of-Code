// let a: number;
// let b: boolean;
// let c: string;

// let e: number[] = [1,2,3];

// const ColorRed = 0; 
// const ColorGreen = 1;
// const ColorBlue = 2;

// enum Color { Red, Green, Blue };

// let backgroundColor = Color.Red;

// console.log(Color.Blue)

let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');

//interface 
interface Point {
    x:number,
    y:number
}
//inline annotation
let drawPoint = (point: Point) => {
    
}

drawPoint({
    x:1,
    y:0
})