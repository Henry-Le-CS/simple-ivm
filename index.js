const ivm = require('isolated-vm')
const fs = require('fs')

const isolate = new ivm.Isolate({ memoryLimit: 8 /* MB */ })
const context = isolate.createContextSync()

const libEntries = ['./lib/lodash.js']

for (const entry of libEntries) {
    const libCode = fs.readFileSync(entry, 'utf-8')
    isolate.compileScriptSync(libCode).runSync(context)
}

const userFn = fs.readFileSync('./example-code.txt', 'utf-8')

const code = `
(()=>{
    const fn = ${userFn};
    
    const res = fn();
    return res;
})();
`;

(async () => {
    try {
        const script = await isolate.compileScript(code)
        const result = await script.run(context)
        console.log(result)
    } catch (error) {
        console.error(error)
    }
})()