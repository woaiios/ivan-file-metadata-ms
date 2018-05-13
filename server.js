var express = require('express')
var app = express()
const multer = require('multer');

app.use(express.static('views'))
app.get('/', function (req, res) {
	res.sendFile("index.html")
	res.end()
})

var storageOptions = multer.memoryStorage();
var fileUpload = multer({
  storage: storageOptions,
  limits: {
      fileSize: 1000000
  }
}).single("fileToUpload");

app.post("/fileupload", fileUpload, (req, res) => {
  console.log(req.file)
  var info = {size:req.file.size} 
  res.send(info)
})

app.listen(3000)