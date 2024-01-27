const path = require('path')
// Modify this to bundle the libraries you want
module.exports = {
    entry: 'lodash', // uuid
    output: {
        library: 'lodash', // uuid
        filename: 'lodash.js', // uuid.js
        path: path.resolve(__dirname + '/lib'),
    },
}
