var express = require('express'),
	app = express();
	bodyParser = require('body-parser');

console.log("server has started.")

app.use(bodyParser());

app.all('*', function(req, res, next){
	console.log("app.all");
	res.header('Access-Control-Allow-Origin', '127.0.0.1');
	res.header('Access-Control-Allow-Headers');
	next();
});

app.get('/', function(req, res){
	res.json('welcome');
});

app.get('/name', function(req, res){
	res.json({name:'Saba Samakar'});
});

app.get('/location', function(req, res){
	res.json({location:'Seattle, WA'});
});

var hobbies = ['playing the drums', 'haberdashery', 'alphabets', 'lamp']

app.get('/hobbies', function(req, res){
	var hobbyList = hobbies;
		order = req.query.order;
	if (order == 'asc'){
		hobbyList.sort();
	} else if (order == 'desc') {
		hobbyList.sort().reverse();
	}
	res.json(hobbyList);
});

var occupations = ['funemployed', 'technical writer', 'mechanic']

app.get('/occupations', function(req, res){
	var occupationList = occupations;
		order = req.query.order
	if (order == 'asc'){
		occupationList.sort();
	} else if (order == 'desc'){
		occupationList.sort().reverse();
	}
	res.json({occupations: occupations});
});

app.get('/occupations/latest', function(req, res){
	res.json({occupation: occupation[0]});
});

app.get('/mentions', function(req, res){
	res.json(mentions);
});

var mentions = [];

app.post('/mentions', function(req, res){
	console.log(req.body);
	var newMention = req.body.mention;
	mentions.push(newMention);
	res.json(newMention);
});

var friends = [];

app.get('/friends', function(req, res){
	res.json(friends);
});

app.post('/friends', function(req, res){
	console.log(req.body);
	var newFriend = req.body;
	friends.push(newFriend);
	res.json(newFriend);
});

var skills = [{id: 1, name: 'javascript'},{id: 2, name: 'kickin it'}];

app.get('/skills', function(req,res) {
	res.json(skills);
});

app.get('/skills/:id', function(req, res){
	var skillByID = "";
	for (var i = 0; i<skills.length; i++){
		if (skills[i].id == req.params.id){
			skillByID = skills[i];
			break;
		}
	}
	res.json(skillByID);
});

app.post('/skills', function(req, res){
	var newSkill = req.body;
	skills.push(newSkill);
	res.json(newSkill);
})

app.put('/skills/:id', function(req, res){

});

app.listen(9800);