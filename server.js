var express = require('express');//library functions for creating the hhtp server ,listening tpo the ports
var morgan = require('morgan');//to display the logs of requests and response messages
var path = require('path');

var app = express();
app.use(morgan('combined'));
var chro= {
    title:'ABOUT chromium ',
    date:'  DATE:2/11/2017',
    content:`    <div>
                    <p>
                        chromium web browser is an opensource project aimed to provide good user interface at lower application size.It came with many new features.
                    </p>
                </div>
                <div>
                    <p>
                        later it was modified by google by adding several plugins such as flash player ,ability to run mp3 file etc.
                    </p>
                </div>`
    
};
function createTemplate(data){
    date=data.date;
    title=data.title;
    content=data.content;

var HtmlTemplate = `<html>

    <head>
          <title>
            ${title}
          </title>
           <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link href="/ui/style.css" rel="stylesheet" /> 
    <!.. links the css stylesheet to html..>
    </head>
<body>
        <div class="saiga">
             
                <div>
                    <h4>
                    ${date}
                    </h4>
                </div>
                <hr/>
                <a href="/">home</a>
              ${content}
        </div>
</body>
  
</html>`;
 return HtmlTemplate;
}
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
    res.send(createTemplate(chro));
    
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
