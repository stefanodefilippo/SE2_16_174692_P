//list of reservation, in the form [id client, day, primo, secondo, contorno]
var reservations = [[1, "2016-12-05", "pasta", "spinaci", "null"], [2, "2016-12-05", "riso", "tonoo", "torta"], [2, "2016-11-28", "riso", "tonoo", "torta"], [1, "2016-12-26", "pasta", "spinaci", "mela"]];

var getStatus = function(id){
    var nextMonday = new Date();
    var nextWednesday = new Date();
    nextFriday = new Date();
    
    var mondayStatus = "incompleto";
    var wednesdayStatus = "incompleto";
    var fridayStatus = "incompleto";
    
    //set the date of the next monday and the other days
    nextMonday.setDate(parseInt(nextMonday.getDate() + ((7 - nextMonday.getDay() + 1) % 7)));
    
    nextWednesday.setDate(nextMonday.getDate() + 2);
    nextFriday.setDate(nextWednesday.getDate() + 2);
    
    for(var i = 0; i < reservations.length; i++){
        if(reservations[i][0] == id){
            
            if(reservations[i][1] == nextMonday.toLocaleDateString()){
                mondayStatus = "completo"
            }
            if(reservations[i][1] == nextWednesday.toLocaleDateString()){
                wednesdayStatus = "completo"
            }
            if(reservations[i][1] == nextFriday.toLocaleDateString()){
                fridayStatus = "completo"
            }
        
        }
    }
    
    return[nextMonday.toLocaleDateString(), mondayStatus, wednesdayStatus, fridayStatus]
}

//exports functions
exports.getStatus = getStatus; 