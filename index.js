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
var moduleEvalutation = require('./evalutation.js');


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
app.use('/resources', express.static(__dirname + '/clientResources/'));


app.use(bodyParser.urlencoded({ extended: false }));


app.set('port', (process.env.PORT || 1337));

//message to return to the user
var message;
//template to return to the user
var file;
//useful variable for remembering the state when a page redirects the user to another page
var status;
//various parameter
var id;
var username;
var password;
//date of the next monday
var nextMonday;
//the order status for the specified day(it can be "completo" o "incompleto")
var mondayStatus, wednesdayStatus, fridayStatus;
var dayReservation = "lunedi";
var primo, secondo, contorno, dessert;
var menu = moduleMenu.getMenu(primo, secondo, contorno, dessert, dayReservation);
var dish;
//status of the user evalutation for the previous week
var primiStatus, secondiStatus, contorniStatus, dessertStatus;
var serviceEvalutation, cookEvalutation, temperatureEvalutation;

/**
 * @brief Update the list containing the various parameters.
 */
var get_param_list = function(){
     return [message, id, username, nextMonday, mondayStatus, wednesdayStatus, fridayStatus, dayReservation, primo, secondo, contorno, dessert, menu, dish, primiStatus, secondiStatus, contorniStatus, dessertStatus, serviceEvalutation, cookEvalutation, temperatureEvalutation];
};
        
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
                file = "TPLs/welcomePage.tpl";
            }else{
                var username = request.body.username;
                var password = request.body.password;
                var caio = request.body.caio;
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
        message = "Prenotazione effettuata con successo";
    }
      
    if(status == "evalOk"){
        message = "Valutazione inviata";
    }
    
    request.session.id_user = id;
    
    [nextMonday, mondayStatus, wednesdayStatus, fridayStatus] = moduleReservation.getStatus(id);
            
    parametersList = get_param_list();
    
    moduleBinding.doBind(file, parametersList, response);
    
    status = "";
        
});


app.get('/login', function(request, response) 
{                
    
    
    if(request.session.id_user != null){
        status = "alreadyAuth";
        response.redirect("/home");
        return;
    }
    
    if(status != "mustLogin"){
        message = "";
    }else{
        message = "Devi prima effettuare l'accesso per accedere a questa risorsa";
    }
    
    if(status == "loginFailed"){
        message = "Username/password scorretti (per favore, utilizza le credenziali che ti sono state fornite dalla compagnia di distribuzione)";
    }
    
    if(status == "logoutSuccess"){
        message = "Logout eseguito con successo";
    }
        
    file = "TPLs/loginForm.tpl";
    
    parametersList = get_param_list();
    
    moduleBinding.doBind(file, parametersList, response);
    
    status = "";
        
});

app.use('/*Reservation', function(request, response) 
{                
    
    dayReservation = request.originalUrl.replace("Reservation", "");
    
    if(request.session.id_user == null){
        status = "mustLogin";
        response.redirect("/login");
        return;
    }
    
    [primo, secondo, contorno, dessert, dayReservation] = moduleReservation.getReservation(id, dayReservation);
    
    menu = moduleMenu.getMenu(primo, secondo, contorno, dessert, dayReservation);
    
    file = "TPLs/reserve.tpl";
    
    parametersList = get_param_list();
    
    moduleBinding.doBind(file, parametersList, response);
        
});

app.use('/addReservation*', function(request, response) 
{                
    dayReservation = request.originalUrl.replace("addReservation", "");
    
    if(request.session.id_user == null){
        status = "mustLogin";
        response.redirect("/login");
        return;
    }
    
    id = request.session.id_user;
    primo = request.body.primo;
    secondo = request.body.secondo;
    contorno = request.body.contorno;
    dessert = request.body.dessert;
    
    moduleReservation.addOrReplaceReservation(id, dayReservation, primo, secondo, contorno, dessert);
    
    file = "TPLs/home.tpl";
    
    status = "reservSuccess";
    response.redirect("/home");
        
});

app.use('/evalutate', function(request, response) 
{                
    
    if(request.session.id_user == null){
        status = "mustLogin";
        response.redirect("/login");
        return;
    }
    
    [primiStatus, secondiStatus, contorniStatus, dessertStatus] = moduleEvalutation.getEvalutationStatus(id);
    
    parametersList = get_param_list();
        
    file = "TPLs/evalutate.tpl";
        
    moduleBinding.doBind(file, parametersList, response);
        
});

app.use('/evalutate_*', function(request, response) 
{        
    
    dish = request.originalUrl.replace("/evalutate_", "");

    if(request.session.id_user == null){
        status = "mustLogin";
        response.redirect("/login");
        return;
    }
    
    id = request.session.id_user;
    
    if(request.body.service != undefined){
        
        moduleEvalutation.addEvalutation(id, request.body.service, request.body.cook, request.body.temperature, dish);
        status = "evalOk";
        response.redirect("/home");
        return;
    }
        
    
    
    parametersList = get_param_list();
    
    file = "TPLs/evalutateDish.tpl";
        
    moduleBinding.doBind(file, parametersList, response);
        
});

app.use('/showEvalutation_*', function(request, response) 
{        
    
    dish = request.originalUrl.replace("/showEvalutation_", "");

    if(request.session.id_user == null){
        status = "mustLogin";
        response.redirect("/login");
        return;
    }
    
    id = request.session.id_user;
            
    [serviceEvalutation, cookEvalutation, temperatureEvalutation] = moduleEvalutation.getEvalutation(id, dish);
    
    parametersList = get_param_list();
    
    file = "TPLs/showEvalutation.tpl";
        
    moduleBinding.doBind(file, parametersList, response);
        
});

// Logout endpoint
app.get('/logout', function (req, res) {
  req.session.id_user = null;
  status = "logoutSuccess";
  res.redirect("/login");
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
