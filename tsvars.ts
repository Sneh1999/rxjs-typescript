let isDone: boolean = false;
let decimal: number = 6;
let color: string = 'red'
let list: Array<number> = [1,2,3]

// tuple
let x: [string,number]
x = ['hello',10]

enum Color {Red = 1, Green,Blue}

let notSure: any =  4

let listcheck: any[] = [1,true, "false"]

// functions that dont return anything

function warnUser(): void {
    console.log("This is a warning message")
}

let u: undefined = undefined;
let n: null = null;

// for a function that always returns an exception or when never  returns

function error(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
    }
}

declare function create(o: object | null): void;
create({ prop: 0 }); // OK
create(null); // OK


function sumMatriz(matrix: number[][]){
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}

//  in this example b is optional
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}


let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { food: "rich", ...defaults };


interface Labeledvalue {
    label: string
}

function printLabel(labelobj: Labeledvalue){
    console.log(labelobj.label);
}

//  optional parameters can be 
interface SquareConfig {
    color?: string;
    width?: number;
}

interface Point {
    readonly x:number;
    readonly y: number
}

class Animal {
    name: string
}
class Dog extends Animal{
    breed: string
}

interface Readonlysrray {
    readonly [index: number]: string | number;
}
let myArray: Readonlysrray= ["Alice", "Bob"];


class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}
//  this gives an error
// class Images implements SelectableControl {
//     private state: any;
//     select() { }
// }


class Greeter {
    greeting: string;
    constructor(message: string){
        this.greeting = message;
    }
    greet(){
        return "Hello" + this.greeting
    }

}

let greeter = new Greeter("world")

class Animalway {
    move(distanceinMeters: number = 0){
        console.log(`Animal movedm.`);
    }
}

// class Dog extends Animal {
//     bark() {
//         console.log('Woof! Woof!');
//     }
// }

// const dog = new Dog();
// dog.bark();

// dog.move(10);
// dog.bark();

//  we can use  this in functions
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}
