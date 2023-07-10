

/* Create a class called Car with three properties: company, model, and year. The class should have a method
called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an
instance of the Car class and call the getDescription method. */

// blueprint of object called class  that has three properties: company, model and year
class car{
  
   company;
   model;
   year;

    constructor(company, model, year)
    {
        this.company = company;
        this.model = model;
        this.year = year;
    }

    getDescription()
    {
       return( "This is a "  +this.year+ " "  +   this.company+" "  +   this.model).toString();
    }
    
}

let car1=new car("TATA","scoda rapid",2022);// creating new object  

console.log(car1.getDescription());

