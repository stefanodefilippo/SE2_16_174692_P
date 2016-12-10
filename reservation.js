//list of reservation, in the form [id client, day, primo, secondo, contorno]
var reservations = [[1, "2016-12-05", "pasta in brodo", "pollo lesso", "peperoni al forno", "frutta fresca"], [2, "2016-12-05", "pasta in bianco", "formaggio", "patate bollite", "frutta fresca"], [2, "2016-11-28", "pasta in brodo", "pollo lesso", "peperoni al forno", "frutta fresca"], [1, "2016-12-09", "pasta in bianco", "formaggio", "patate bollite", "frutta fresca"]];

/**
 * @brief Get the status of the user reservations for the next week.
 * @param id The identifier of the user.
 * @return a list containing the date of the next monday and the status of the reservations.
 */
var getStatus = function(id){
    var nextMonday = new Date();
    var nextWednesday;
    var nextFriday;
    
    var mondayStatus = "incompleto";
    var wednesdayStatus = "incompleto";
    var fridayStatus = "incompleto";
    
    //set the date of the next monday and the other days
    nextMonday.setDate(parseInt(nextMonday.getDate() + ((7 - nextMonday.getDay() + 1) % 7)));
    
    nextWednesday = new Date(nextMonday);
    nextWednesday.setDate(nextMonday.getDate() + 2);
    nextFriday = new Date(nextMonday);
    nextFriday.setDate(nextMonday.getDate() + 4);
        
    for(var i = 0; i < reservations.length; i++){
        if(reservations[i][0] == id){
            
            if(reservations[i][1] == nextMonday.toLocaleDateString()){
                mondayStatus = "completo";
            }
            if(reservations[i][1] == nextWednesday.toLocaleDateString()){
                wednesdayStatus = "completo";
            }
            if(reservations[i][1] == nextFriday.toLocaleDateString()){
                fridayStatus = "completo";
            }
        
        }
    }
    
    return[nextMonday.toLocaleDateString(), mondayStatus, wednesdayStatus, fridayStatus];
};

/**
 * @brief Get the dishes oredered by the user for the specified day.
 * @param id The user identifier.
 * @param dayReservation the day of the next week.
 * @return a list containing the dishes ordered for that day, and that day.
 */
var getReservation = function(id, dayReservation){
    
    var nextMonday = new Date(getStatus(id)[0]);
    
    var dayToSearch = new Date(nextMonday);
    
    switch(dayReservation){
        case "/monday":
            dayReservation = "lunedi";
        break;
        case "/wednesday":
            dayReservation = "mercoledi";
            dayToSearch.setDate(nextMonday.getDate() + 2);
        break;
        case "/friday":
            dayReservation = "venerdi";
            dayToSearch.setDate(nextMonday.getDate() + 4);
        break;
    }
    
    for(var i = 0; i < reservations.length; i++){
        if(reservations[i][0] == id && reservations[i][1] == dayToSearch.toLocaleDateString()){
            return [reservations[i][2], reservations[i][3], reservations[i][4], reservations[i][5], dayReservation];
        } 
    }
    
    return["niente", "niente", "niente", "niente", dayReservation];
    
    
};

/**
 * @brief add to the reservation list a new reservation. If there is already a reservation with that date and that id, it is updated.
 * @param id The user identifier.
 * @param dayReservation the day of the next week.
 * @param primo The "primo" section chosen by the user.
 * @param secondo The "secondo" section chosen by the user.
 * @param contorno The "contorno" section chosen by the user.
 * @param dessert The "dessert" section chosen by the user.
 */
var addOrReplaceReservation = function(id, dayReservation, primo, secondo, contorno, dessert){
        
    var nextMonday = new Date(getStatus(id)[0]);
    
    var dayToSearch = new Date(nextMonday);
    
    switch(dayReservation){
        case "/lunedi":
        break;
        case "/mercoledi":
            dayToSearch.setDate(nextMonday.getDate() + 2);
        break;
        case "/venerdi":
            dayToSearch.setDate(nextMonday.getDate() + 4);
        break;
    }
    
    for(var i = 0; i < reservations.length; i++){
        
        if(reservations[i][0] == id && reservations[i][1] == dayToSearch.toLocaleDateString()){
            reservations[i][2] = primo;
            reservations[i][3] = secondo;
            reservations[i][4] = contorno;
            reservations[i][5] = dessert;
        } 
        
    }
    
    reservations.push([id, dayToSearch.toLocaleDateString(), primo, secondo, contorno, dessert]);
    
};

//exports functions
exports.getStatus = getStatus; 
exports.getReservation = getReservation; 
exports.addOrReplaceReservation = addOrReplaceReservation; 