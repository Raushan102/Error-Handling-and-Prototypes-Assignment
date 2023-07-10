/* Create a class called User with properties username and password. Implement a getter method for password
that returns the password with all characters replaced by asterisks. Implement a setter method for password
that checks if the new password is at least 8 characters long and contains at least one number and one
uppercase letter. If the password is valid, set the new password. If not, log an error message. */

class User {

    username;
    #password;

    constructor(username)
    {
        this.username = username;   
    }

    setpassword(password)
    {
        if(password.length>8 && /[A-Z]/.test(password)&&/\d/.test(password))

        {
            this.password = password;
        }
        else{
             console.log("invailed password the new password is at least 8 characters long and contains at least one number and one touppercase ");
        }
    }

    getpassword()
    {
        console.log("password is  = " + this.password);
    }
} 

let niraj=new User("Raushan");

niraj.setpassword("Rasuahn@102");

console.log(niraj.getpassword());
  

 






 

 
  