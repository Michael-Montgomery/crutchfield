function OldUser(name, email, accessLevel) {
    this.dateCreated = new Date();
    this.userName = name;
    this.email = email;
    this.access = accessLevel;
}

new OldUser('Donald', 'me@yahoo.com');

class User {
    constructor(name, email) {
        this.dateCreated = new Date();
        this.userName = name;
        this.email = email;
        this.access = 'standard';
    }
    sendEmail() {
        console.log(`An email was sent to ${this.userName}`)
    }
}

class Admin extends User {
   super(adminID) {
       this._id = adminID;
   }
    deleteData() {
        console.log(`${this.userName} has deleted data!`)
    }
}

let john = new User('john', 'some@email.com')
let jacob = new Admin('jacob', 'some@yahoo.com')

