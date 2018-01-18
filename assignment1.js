var express = require('express')
var app = express()
var port = 3000

app.use(express.static("public"))
app.use(express.static("src/views"))

//static routes
app.get("/", function(req, res){
	res.send(index.html);
});

app.get("/logIn", function(req, res){
	res.send("");
});

app.get("/addToList", function(req, res){
	res.send("");
});

//Listen on port
app.listen(port, function(err){
	console.log("Server running on port " + port)
})