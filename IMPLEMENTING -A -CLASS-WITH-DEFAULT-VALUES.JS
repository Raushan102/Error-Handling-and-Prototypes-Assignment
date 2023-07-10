/* Create a class called Person with two properties: name and age. The class should have a method called
getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the
constructor to set the values of name and age to "Unknown" and 0 if they are not provided. */

class Person {
  name;
  age;

  constructor(name = "unknown", age = 0) {// constructor with default  parameter
    this.name = name;
    this.age= age;
  }

  getdetails() {
    return (
      "Name: " +
       
      this.name +
       
      "," +
      "age: " +
       +
     this.age 
      
    ).toString();
  }
}

//let employee1 = new Person("rasuahn", 30);
let employee1 = new Person();

console.log(employee1.getdetails());
