var express = require('express');
var app = express();

app.use('/build', express.static('build'));
app.use('/static', express.static('static'));

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
var server = app.listen(3000, _ => {
    var port = server.address().port;
    console.log('Example app listening at %s', port);
});
