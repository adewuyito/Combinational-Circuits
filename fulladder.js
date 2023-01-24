// Adder with basic logic
import { adderPar as adder, OR as orOperation } from "./half-adder.js";
let logic = new Object()
logic.Sum
logic.Cin
logic.Cout


function fullAdder(a, b, carryIn) {
    const inputA = a
    const inputB = b
    const Cin = carryIn
    let CarryA
    let CarryB
    // Fist full adder
    let fistAdder = adder(inputA, inputB);
    CarryA = fistAdder.Carry
    // second full adder
    let secondAdder = adder(fistAdder.Sum, Cin)
    CarryB = secondAdder.Carry
    // Carry Or logic
    let carry = orOperation(CarryA, CarryB)
    // Initializing Logic Object
    logic.sum = secondAdder.Sum
    logic.Cout = carry
    logic.Cin = Cin
}

fullAdder(0, 1, 0)
console.log(logic)