var express = require('express');
var path = require('path');

var app = express();
var port = process.env.port || 3000;

// GET LIST OF CHARACTERS
app.use('/myapp', require('./server/routes/characters-route'));
// POST SELECTED CHARACTER
app.use('/myapp', require('./server/routes/character-data-route'));
// POST SELECTED TARGET
app.use('/myapp', require('./server/routes/target-route'));

app.use('/myapp', express.static('client'));

app.get('/myapp', function (req, res) {
    res.sendFile(path.join(__dirname + '/server/views/index.html'));
});

app.listen(port, function () {
    console.log('Server running at port', port);
});