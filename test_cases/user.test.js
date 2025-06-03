import {describe, test, mock, it} from 'node:test'
import assert from 'node:assert'
import { fetchData } from '../app.js'

// SNAPSHOT TESTING
describe("User feature", ()=>{
    // it is an alias for test
    it("fetches the data from the server", (t)=>{ // for snapshot send a context named t
        const data = fetchData(1)


        // assert.strictEqual(data.id,1)
        // assert.strictEqual(data.name, "abab")
        // assert.strictEqual(data.id, 1)


        t.assert.snapshot(data);
    })
})

/* TO RUN THIS :

 For first time run : node --test --test-update-snapshots

			Then from next time onwards use : node --test
		This creates a file inside of results of snapshot.

		This is always commited to git 

 */