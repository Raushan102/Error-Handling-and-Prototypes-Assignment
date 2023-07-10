/* Create a class called Employee with three properties: name, position, and salary. The class should have a
method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and
call the getSalary method. */

class Employee
{
     #salary;
     position;
     name;

   

     setsalary(value)
     {
        this.salary = value;
     }
     getsalary()
     {
         console.log("salary: " + this.salary);
     }

}

let employee1 = new Employee();

employee1.setsalary(80000);
console.log(employee1.getsalary());
c



