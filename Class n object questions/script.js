// You are creating a website for your college. Create a class user with 2 properties, name & email. It also has a method called
// viewdata() that allows user to view website data.

let DATA = "secret data";

class user {
   constructor(name, email) {
    this.name =name;
    this.email=email;
   }

   viewdata(){
    console.log("Data =", DATA);
   }
}

let student1 = new user("Gajendra", "gajendraarya538@gmail.com");
let student2 = new user("Dilsahib", "dsb@gmail.com");

let teacher1 = new user("Dean", "Dean@gmail.com");

// Create a new class called Admin which inherits from user. Add a new method called editData to Admin that allows it to edit website data.

class Admin extends user {
    constructor(name,email){
      super(name,email);
    }
    editData (){
        DATA = "Some new value";
    }
}

let admin1 = new Admin("admin", "admin@college.com");
