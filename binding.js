//for templates
var bind = require('bind');

var doBind = function(file, parametersList, status, response){
    
    var menu = parametersList[12];
    
    bind.toFile(file, 
			    {
                    //set up parameters for the page that is returned to the user
                    id: parametersList[1],
                    primo: parametersList[8],
                    secondo: parametersList[9],
                    contorno: parametersList[10],
                    dessert: parametersList[11],
                    message: parametersList[0],
                    username: parametersList[2],
                    nextMonday: parametersList[3],
                    mondayStatus: parametersList[4],
                    wednesdayStatus: parametersList[5],
                    fridayStatus: parametersList[6],
                    dayReservation: parametersList[7],
                    primiStatus: parametersList[14],
                    secondiStatus: parametersList[15],
                    contorniStatus: parametersList[16],
                    dessertStatus: parametersList[17],
                    serviceEvalutation: parametersList[18],
                    cookEvalutation: parametersList[19],
                    temperatureEvalutation: parametersList[20],
                    dish: parametersList[13],
                    pfirst: menu[0][0],
                    psecond: menu[0][1],
                    pthird: menu[0][2],
                    pfourth: menu[0][3],
                    pfivth: menu[0][4],
                    sfirst: menu[1][0],
                    ssecond: menu[1][1],
                    sthird: menu[1][2],
                    sfourth: menu[1][3],
                    sfivth: menu[1][4],
                    cfirst: menu[2][0],
                    csecond: menu[2][1],
                    cthird: menu[2][2],
                    cfourth: menu[2][3],
                    cfivth: menu[2][4],
                    dfirst: menu[3][0],
                    dsecond: menu[3][1],
                    dthird: menu[3][2],
                },
			    function(data) 
			    {
				//write response
				response.writeHead(200, {'Content-Type': 'text/html'});
				response.end(data);
			    })
    
}

//exports functions
exports.doBind = doBind; 