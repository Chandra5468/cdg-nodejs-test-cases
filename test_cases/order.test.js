import {describe, test, mock} from 'node:test';
import { processOrder } from '../app.js';
import assert from 'node:assert';
// import {suite, test} from "node:test"
// suite("order feature")


describe("Order feature", ()=>{
    test("that it processess the order correctly", ()=>{ // we are testing process order
        // AAA : Arrange, Act Assert, SPY

        /*
            Arrange :   
                Arrange all the configurations required for variables, envs, configurations etc...
            Act :
                Call the function or unit or integration etc..
            Assert :   
                Testing and result comparison.
        */

        // Using mock module from node:test

        // Creating a mock function

        const mockedProcessPayment = mock.fn((amount)=>{ // This is a dependency injection. That is a function inside another funtion. Instead of calling the original inside function (which may be mongo or any thing), we call mocked version
            // This is a mock test, do not call any api or no side effects
            console.log("I am mocked and called only while testing")
            return {id : '123', amount:amount}
        })

        const expected = {id : '123', amount:100};

        assert.strictEqual(mockedProcessPayment.mock.callCount(), 0)// Making sure this should not be called.
        const result = processOrder({amount:100}, {processPayment: mockedProcessPayment}); // After processOrder is called making sure mockedProcessPayment is called once

        assert.deepStrictEqual(result, expected)
        assert.strictEqual(mockedProcessPayment.mock.callCount(), 1)// This ensures the function is called alteast once

        const call = mockedProcessPayment.mock.calls[0] // This gives array of result on how many mocks have been called

        assert.deepStrictEqual(call.arguments, [100])// currently our arguements are only 100. if more are there you can include them in array.
    })
})
