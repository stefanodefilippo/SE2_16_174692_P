//express lib
var express = require('express');
//inspect
var util = require('util');

//instantiate express
var app = express();

var fs = require('fs');

//for templates
var bind = require('bind');

//import modules
var moduleUser = require('./user.js');
var moduleReservation = require('./reservation.js');
var moduleBinding = require('./binding.js');
var moduleMenu = require('./menu.js');


//session
var session = require('express-session');
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

//POST
var bodyParser = require('body-parser');

//the client can access to file script.js
app.use('/script', express.static(__dirname + '/clientScripts/'));


app.use(bodyParser.urlencoded({ extended: false }));


app.set('port', (process.env.PORT || 1337));


        //type of the user request, for example "login"
		var typeOfRequest;// = request.body.typeOfRequest;

        //message to return to the user
		var message;
            
        //template to return to the user
        var file;

        var status = 200;
            
        //various parameter
        var id;// = request.body.id;
        var username;// = request.body.username;
        var password;// = request.body.password;
        var nextMonday;
        //assume values "incompleto" o "completo", referring to the order status for that day
        var mondayStatus, wednesdayStatus, fridayStatus;
        var dayReservation = "lunedi";
        var primo, secondo, contorno, dessert;
        var menu = moduleMenu.getMenu(primo, secondo, contorno, dessert, dayReservation);
        
var get_param_list = function(){
     return [message, id, username, nextMonday, mondayStatus, wednesdayStatus, fridayStatus, dayReservation, primo, secondo, contorno, dessert, menu]
}
        
        //list of the various pararmenters
        var parametersList = get_param_list();



app.use('/home', function(request, response) 
{                
    id = request.session.id_user;
    
    if(request.session.id_user != null){
                if(status == "alreadyAuth"){
                    message = "Hai già effettuato l'accesso!";
                }else{
                    message = "";
                }
                file = "./welcomePage.tpl";
            }else{
                var username = request.body.username;
                var password = request.body.password;
                var caio = request.body.caio;
                console.log(username + password + caio);
                [message, file, id, status] = moduleUser.authenticate(username, password);
            }
            
            if(status == "mustLogin"){
                response.redirect("/login");
                return;
            }
    
            if(status == "loginFailed"){
                response.redirect("/login");
                return;
            }
    
            if(status == "reservSuccess"){
                message = "Prenotazione effettuata con successo"
            }
    
            request.session.id_user = id;
    
            [nextMonday, mondayStatus, wednesdayStatus, fridayStatus] = moduleReservation.getStatus(id);
            
            parametersList = get_param_list();
    
            moduleBinding.doBind(file, parametersList, status, response);
        
});


app.use('/login', function(request, response) 
{                
    
    
    if(request.session.id_user != null){
        
        status = "alreadyAuth";
        response.redirect("/home");
        return;
        
    }
    
    if(status != "mustLogin"){
        message = "";
    }
    
    if(status == "loginFailed"){
        message = "Username/password scorretti";
    }
        
    file = "./loginForm.tpl";
    
    parametersList = get_param_list();
    
    moduleBinding.doBind(file, parametersList, status, response);
        
});

app.use('/*Reservation', function(request, response) 
{                
    
    dayReservation = request.originalUrl.replace("Reservation", "");
    
    if(request.session.id_user == null){
        status = "mustLogin";
        message = "Devi prima effettuare l'accesso per accedere a questa risorsa";
        response.redirect("/login");
        return;
    }
    
    [primo, secondo, contorno, dessert, dayReservation] = moduleReservation.getReservation(id, dayReservation);
    
    menu = moduleMenu.getMenu(primo, secondo, contorno, dessert, dayReservation);
    
    file = "./reserve.tpl";
    
    parametersList = get_param_list();
    
    moduleBinding.doBind(file, parametersList, status, response);
        
});

app.use('/addReservation*', function(request, response) 
{                
    console.log("siamo qui " + dayReservation);
    dayReservation = request.originalUrl.replace("addReservation", "");
    
    if(request.session.id_user == null){
        status = "mustLogin";
        message = "Devi prima effettuare l'accesso per accedere a questa risorsa";
        response.redirect("/login");
        return;
    }
    
    id = request.session.id_user;
    primo = request.body.primo;
    secondo = request.body.secondo;
    contorno = request.body.contorno;
    dessert = request.body.dessert;
    
    moduleReservation.addOrReplaceReservation(id, dayReservation, primo, secondo, contorno, dessert);
    
    file = "./home.tpl";
    
    status = "reservSuccess";
    response.redirect("/home");
        
});

app.get('/img_*', function (req, res) {
     
     var requested = req.originalUrl.replace("/img_", "").replace(/%20/g, " ");
    
    console.log(requested);
    
     var img = fs.readFileSync("./" + requested + ".jpg");
    
     res.writeHead(200, {'Content-Type': 'image/jpg' });
    
     res.end(img, 'binary');
});

// Logout endpoint
app.get('/logout', function (req, res) {
  req.session.id_user = null;
  res.send("logout success!");
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
