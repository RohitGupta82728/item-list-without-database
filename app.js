const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT||3000;

app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');

const users=[];

app.get('/',(req,res,next)=>{
    res.render('index',{pageTitle:'Add User'});
});


app.get('/users', (req, res, next) => {
    res.render('users', {
      pageTitle: 'User',
      users: users,
      hasUsers: users.length > 0
    });
  });
  
  app.post('/add-user', (req, res, next) => {
    users.push({ name: req.body.username });
    res.redirect('/users');
  });

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});