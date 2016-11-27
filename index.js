//express lib
var express = require('express');
//inspect
var util = require('util');

//instantiate express
var app = express();

//for templates
var bind = require('bind');

//import modules
var moduleUser = require('./user.js');
var moduleReservation = require('./reservation.js');

//POST
var bodyParser = require('body-parser');

//the client can access to file script.js
app.use('/script', express.static(__dirname + '/clientScripts/'));


app.use(bodyParser.urlencoded({ extended: false }));


app.set('port', (process.env.PORT || 1337));

//handle POST request
app.post('/', function(request, response){

	    if ( typeof request.body !== 'undefined' && request.body){

        //type of the user request, for example "login"
		var typeOfRequest = request.body.typeOfRequest;

        //message to return to the user
		var message;
            
        //template to return to the user
        var file;
            
        //various parameter
        var id = request.body.id;
        var username = request.body.username;
        var password = request.body.password;
        var nextMonday;
        var mondayStatus, wednesdayStatus, fridayStatus;
        var dayReservation;
        
        if(typeOfRequest == "welcomePage"){
            
            if(id != undefined){
                file = "./welcomePage";
            }else{
                [message, file, id] = moduleUser.authenticate(username, password);
            }
            
            [nextMonday, mondayStatus, wednesdayStatus, fridayStatus] = moduleReservation.getStatus(id);
            
        }
            
        if(typeOfRequest == "mondayReservation"){
            dayReservation = "Lunedì";
            message = "Compila la tua prenotazione per " + dayReservation + " prossimo";
            file = "./reserve.tpl";
        }
        if(typeOfRequest == "wednesdayReservation"){
            dayReservation = "Mercoledì";
            message = "Compila la tua prenotazione per " + dayReservation + " prossimo";
            file = "./reserve.tpl";
        }
        if(typeOfRequest == "fridayReservation"){
            dayReservation = "Venerdì";
            message = "Compila la tua prenotazione per " + dayReservation + " prossimo";
            file = "./reserve.tpl";
        }

		bind.toFile(file, 
			    {
                    //set up parameters for the page that is returned to the user
                    message: message,
                    username: username,
                    nextMonday: nextMonday,
                    mondayStatus: mondayStatus,
                    wednesdayStatus: wednesdayStatus,
                    fridayStatus: fridayStatus,
                    dayReservation: dayReservation
			    },
			    function(data) 
			    {
				//write response
				response.writeHead(200, {'Content-Type': 'text/html'});
				response.end(data);
			    })

		
	    }
	});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
