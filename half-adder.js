export function adderPar(a, b) {
    const output = { Sum: 0, Carry: 0 }
    let inputA = a
    let inputB = b

    // AND operation
    function AND(inputA, inputB) {
        if (inputA === 1 && inputB === 1) {
            return 1
        } else {
            return 0
        }
    }
    // XOR operation
    function XOR(inputA, inputB) {
        if (inputA ^ inputB) {
            return 1
        } else {
            return 0
        }
    }
    // OR operation
    // function OR(input1, input2) {
    //     if (input1 | input2) {
    //         return 1
    //     } else {
    //         return 0
    //     }
    // }

    let andResult = AND(inputA, inputB)
    let xorResult = XOR(inputA, inputB)
    let computedResult = OR(andResult, xorResult)
    try {
        if (inputA ^ inputB) {
            output.Sum = computedResult
        } else if (inputA == 0 & inputB == 0) {
            output.Carry = 0
        }
        else {
            output.Carry = 1
        }
    } catch (error) {
        console.log(`${error}`)
    }


    // Result display
    // console.log(`AND output: --${andResult}`)
    // console.log(`XOR output: --${xorResult}`)
    // console.log(`Adder Output; \nSum: --${output.Sum} \nCarry: --${output.Carry}`)

    return output
}

export function OR(input1, input2) {
    if (input1 | input2) {
        return 1
    } else {
        return 0
    }
}

// export { OR }
// adderPar(0, 1)