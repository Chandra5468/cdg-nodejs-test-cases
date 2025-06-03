import { greet, greetInRussian } from "../app.js";
import assert from "node:assert"
import {test, suite} from "node:test"; // Available for node versions 23 and above. Else please use jest
// Using default node provided testing library. For node version above 23.11.1
// AAA Concept: For any kind of testings
/*
    Arrange :   
        Arrange all the configurations required for variables, envs, configurations etc...
    Act :
        Call the function or unit or integration etc..
    Assert :   
        Testing and result comparison.
*/

/* Unit test cases

test('that greet returns the correct greetings', ()=>{
    const actual = greet("World!");
    const expected = "Hello, World!"
    assert.strictEqual(actual, expected)
})

test('greet in russian', ()=>{
    const actual = greetInRussian("Chandra!");
    const expected = "привет, Chandra"
    assert.strictEqual(actual, expected)
})

*/

// DO : node --test // In terminal. It will search all the files with extension .test.js and run them.



/*
    What are suites ?
	
	In node:test inbuilt library. Suites mean : 

		Grouping individual unit tests into a single group. It is called suites.
*/

suite("grouping all language greeting functions", ()=>{// Instead of suite you can also use describe. Both are same

    // Moving similar test cases into a suite.
    
    test('that greet returns the correct greetings', ()=>{
    const actual = greet("World!");
    const expected = "Hello, World!"
    assert.strictEqual(actual, expected)
    })

    test('greet in russian', ()=>{
        const actual = greetInRussian("Chandra");
        const expected = "привет, Chandra"
        assert.strictEqual(actual, expected)
    })
})

// To run use # node --test // in terminal