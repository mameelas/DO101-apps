var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});
app.get('/mars', function (req, res) {
  res.send('Hello Marsian how are you doing. ?\n');
});
app.get('/test', function (req, res) {
  res.send('project completed.. !\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

