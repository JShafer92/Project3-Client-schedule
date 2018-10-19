const mongoose = require ('mongoose');

//connect to mongodb

mongoose.connect('mongodb://localhost/login'),

mongoose.connection.once('open', function(){
    console.log('connection has been made');
}).on('error', function(error){
    console.log('connection error:',error)
}); 
