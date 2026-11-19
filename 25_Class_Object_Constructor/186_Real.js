class Student{
    static Batch_name= "PW 4x batch";
    static mentor_name = "Fari";

    constructor(name , score){
        this.name = name;
        this.score = score;
    }
    static display(){
        console.log(this.name + "are part of the" , Student.Batch_name + this.score);
    }
    nonstaticfn(){
        console.log(this.name);
    }
}

let amit = new Student("Amit" , 90);
let meet = new Student("Fari" , 29);
let sumi = new Student("sumi" , 20);
let padmini = new Student("padmini" , 18);
console.log(Student.Batch_name); // PW 4x batch
console.log(amit.name); //Amit
console.log(meet.name); //Fari
console.log(Student.display());
console.log(Student.Batch_name);

//o/p:
// PW 4x batch
// Amit
// Fari
// Studentare part of the PW 4x batchundefined:
// A static method does not belong to an individual student. Inside it:

// this.name refers to Student.name, which is "Student" because a class is also a named object.
// this.score is undefined because no individual student is attached.
// undefined  - The final undefined appears because Student.display() finishes without returning anything, but the outer console.log() prints the returned value.