// install: npm i mocha chai
// run a test file of mocha: npx mocha index.js

import { expect } from "chai";

// scenarion
describe('Utility function', ()=>{
    // test case 1
    it('Sum of 2 numbers', ()=>{
        let sum = 5+5;
        expect(sum).equal(10);

    })

    // test case 2
    it('sub of 2 number', ()=>{
        let sub = 10-5;
        expect(sub).equal(5);
    })
})
