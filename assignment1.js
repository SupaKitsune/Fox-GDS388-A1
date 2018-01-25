var express = require('express')
var app = express()
var port = 3000

app.use(express.static("public"))
app.use(express.static("src/views"))

//static routes
app.get("/", function(req, response){
	response.render("index.html");//changed res.send to response.render
})

app.get("/", function(req, response){
	response.render("addToList.html");
})

app.get("/", function(req, response){
	response.render("logIn.html");
})

//Listen on port
app.listen(port, function(err){
	console.log("Server running on port " + port)
})