

const Scooter = require('./scooter')
describe('scooter ', () => {
    
    test('must have a serial number', ()=> {
        const serialno = new Scooter('Dallas', 'saeed')
        expect(serialno.serialNumber).toBe(100)
    })
    test('must have a station', ()=> {
        const station1 = new Scooter("Dallas")
        expect(station1.station).toBe("Dallas")
    })
    test('must have a user', ()=> {
        const user1 = new Scooter("Dallas", "Saeed")
        expect(user1.user).toBe("Saeed")
    })
 })


        
    
