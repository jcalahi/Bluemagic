var express = require('express');
var path = require('path');
var nlu = require('./server/config/natural-languange');

var app = express();
var port = process.env.port || 3000;

// GET LIST OF CHARACTERS
app.use('/myapp', require('./server/routes/characters-route'));

app.use('/myapp', express.static('client'));

app.get('/myapp', function (req, res) {
    res.sendFile(path.join(__dirname + '/server/views/index.html'));
});

// nlu.analyze({
//     'text': 'In the rugged Colorado Desert of California',
//     'features': {
//       emotion: {
//           targets: [
//               'In the rugged Colorado Desert of California'
//           ]
//       }
//     }
// }, function (err, response) {
//     if (err)
//         console.log('error:', err);
//     else
//         console.log(JSON.stringify(response, null, 2));
// });

app.listen(port, function () {
    console.log('Server running at port', port);
});