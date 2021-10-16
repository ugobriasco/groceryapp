const rewire = require("rewire")
const groceries = rewire("./groceries")
const setGroceries = groceries.__get__("setGroceries")
// @ponicode
describe("setGroceries", () => {
    test("0", () => {
        let callFunction = () => {
            setGroceries()
        }
    
        expect(callFunction).not.toThrow()
    })
})
