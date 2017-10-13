var express = require('express');
var path = require('path');

var app = express();
var port = process.env.port || 3000;

app.use('/myapp', express.static('client'));

app.get('/myapp', function(req, res) {
    res.sendFile(path.join(__dirname + '/server/views/index.html'));
});

app.listen(port, function() {
    console.log('Server running at port', port);
});