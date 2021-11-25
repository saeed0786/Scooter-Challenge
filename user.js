// class User{
//     constructor(userName, passWord, age){
//         this.userName = userName
//         this.passWord = passWord
//         this.age = age
//     }

// }
// module.exports = User

const Person = require('./Person');
class User extends Person {
    constructor(name,license,email,phone,age) {
        if (age <18) throw new Error("user must be 18 or older")
        super(name,license,email,phone)
        this.paymentMethods=[]
        this.rentHistory=[]
        this.currentScooter=[]
        this.age = age
    }
    addpaymentMethod(methodName){
        this.paymentMethods.push(methodName);
    }
}
module.exports = User;