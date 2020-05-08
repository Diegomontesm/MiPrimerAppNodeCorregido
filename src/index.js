const app = require('./config/server');

require('./app/routes/news')(app);

//STARTING THE SEERVER
app.listen(app.get('port'), () => {
    console.log('SERVER ON PORT ', app.get('port'));
});
