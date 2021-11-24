const User = require('./User')
const Scooter = require('./scooter')
class ScooterApp{
    static registeredUser = []
    constructor(){
        this.stations = {
      'Main Street': []
      }
  }

    

    register(user) {
        if(ScooterApp.registeredUsers.includes(user.username)) {
          if(user.age > 18) {
            ScooterApp.registeredUsers.push(user.username) = {
              password: user.password,
              age: user.age 
            }
            console.log('You have been registered')

                }
                console.log('youhave been registered')
            }
        }
    }

    

const scooter = ScooterApp()
console.register('saeed', 'secret', 15)