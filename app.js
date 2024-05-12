const express = require('express')
const fs = require('fs');
const cors = require('cors')

const app = express()
const port = 8000

app.use(express.static('public'))
app.use(cors())

app.post('/donate', function(req, res) {
    var body = '';
    filePath = __dirname + '/data/data.json';
    req.on('data', function(data) {
        body += data;
    });
    req.on('end', function (){
        fs.writeFile(filePath, body, err => {
  	    if (err) {
     	        console.error(err);
  	    }
	});
    });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
