var express = require('express');//library functions for creating the hhtp server ,listening tpo the ports
var morgan = require('morgan');//to display the logs of requests and response messages
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
}); //function that responds to a requested url

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/1408639964981.jpg', function(req,res) {
   res.sendFile(path.join(__dirname,'ui','1408639964981.jpg'));  
});
app.get('/chrom',function(req,res) {
    res.sendFile(path.join(__dirname,'ui','chrom.html'));
    
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
