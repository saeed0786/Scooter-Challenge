class Scooter {
    static serialNumber = 100
    constructor(station, user) {
        this.serialNumber = Scooter.serialNumber
        Scooter.serialNumber += 1
        this.station = station
        this.user = user
        this.Broken = false
        this.docked = true

    }
    recharge() {
        console.log("Recharging ...")
        setTimeout(function() {
            console.log('Finished Charging!');
          }, 5000);
          return "Almost there..."
    }
    fixScooter() {
        console.log('Thank you for submitting a request. Fixing Scooter...');
        setTimeout(function() {
            console.log('Repairs are complete!');
          }, 4000);
          return 'thanks for waiting...'
    }
}

module.exports = Scooter








