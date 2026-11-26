// Primitive types

let name: string = "John";
let age : number = 30;
let pi: number = 3.14;
let distance_to_moon : number = 398765434567;

let isActive : boolean = true;
let nothing: null = null;
let notdefined: undefined = undefined;

//let pi: float = 3.14; // not allowed in ts

// Arrays
let numbers : number[] = [1,2,3];
let names: Array<string> = ["john" , "mary"];

let message : string = "Hello , Typescript";
let count : number = 34;

// Any (avoid when possible)

let anything : any = "hello";

// Unknown (safer than any)
let unknows : unknown = "hello";