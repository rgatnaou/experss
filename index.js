import express from 'express';

const app = express();

app.get('/',(req, res)=>{
	res.send('hello world');
});

app.get('/test',(req, res) => {
	res.send('testing ...');
});

app.post('/new', (req,res) => {
	res.send('fist post in postman');
});

app.get('/new', (req,res) => {
	res.send('fist get in postman');
});

app.listen(3000,() => { 
	console.log('server starting');	
});
