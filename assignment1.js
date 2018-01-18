var express = require('express')
var app = express()
var port = 3000

app.use(express.static("public"))
app.use(express.static("src/views"))

//static routes
app.get("/", function(req, res){
	res.send(index.html);
})

app.get("/1", function(req, res){
	res.send(addToList.html);
})

app.get("/2", function(req, res){
	res.send(logIn.html);
})

//Listen on port
app.listen(port, function(err){
	console.log("Server running on port " + port)
})