
class calculator
{
  static add(a,b)// static method  that is add
  {
    return a + b;
  }

}



let result=calculator.add(1,2);// static method is accesseble is out of the class and without any object  we can access the static method by the class name  

console.log(" result is = " +result);
