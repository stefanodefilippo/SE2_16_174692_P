//list of user evalutations, in the form [id, reference week, reference dish, evalutation of service, cook, temperature]
var evalutations = [[1, "2016-11-28", "primi", 0, 2, 1], [1, "2016-11-28", "dessert", 1, 1, 0]];

/**
 * @brief Auxiliary function that calculates the date of monday of the previous week.
 */
var getPreviousWeek = function(){
    
    var previousMonday = new Date(); 
    previousMonday.setDate(parseInt(previousMonday.getDate() - ((7 + previousMonday.getDay() - 1))));
    return previousMonday;
    
};

/**
 * @brief Get the status of the evalutation for each dish for the previous week.
 * @param id The id of the user whose evalutation status is required.
 * @return A list containing for each dish, true if it has been evalutated, false otherwise.
 */
var getEvalutationStatus = function(id){
    
    var previousWeek = getPreviousWeek().toLocaleDateString();    
    var primiStatus = false; 
    var secondiStatus = false; 
    var contorniStatus = false; 
    var dessertStatus = false; 
    
    for(var i = 0; i < evalutations.length; i++){
        
        if(evalutations[i][0] == id && evalutations[i][1] == previousWeek){
            
            switch(evalutations[i][2]){
                
                case "primi":
                    primiStatus = true;
                    break;
                case "secondi":
                    secondiStatus = true;
                    break;
                case "contorni":
                    contorniStatus = true;
                    break;
                case "dessert":
                    dessertStatus = true;
                    break;
                    
             }
            
        }
        
    }
    
    return [primiStatus, secondiStatus, contorniStatus, dessertStatus];
    
};

/**
 * @brief Add an evalutation in the evlutation list.
 * @param id The identifier of the user that is adding the evalutation.
 * @param service Evalutation of the service.
 * @param cook Evalutation of the cook.
 * @param temperature Evalutation of the temperature.
 * @param dish The dish which the evalutation refers.
 */
var addEvalutation = function(id, service, cook, temperature, dish){
    
    var previousWeek = getPreviousWeek().toLocaleDateString();
    evalutations.push([parseInt(id), previousWeek, dish, parseInt(service), parseInt(cook), parseInt(temperature)]);

};

/**
 * @brief Return an evalutation from the evalutation list.
 * @param id The id of the user that requested his evalutation.
 * @param dish The dish which the evalutation refers.
 * @return A list containing the three terms of the evalutation.
 */
var getEvalutation = function(id, dish){
    
    var serviceEvalutation, cookEvalutation, temperatureEvalutation;
    
    for(var i = 0; i < evalutations.length; i++){
        if(evalutations[i][0] == id && evalutations[i][1] == getPreviousWeek().toLocaleDateString() && evalutations[i][2] == dish){
            
            switch(evalutations[i][3]){
                case 0:
                   serviceEvalutation = "Male";
                   break;
                case 1:
                   serviceEvalutation = "Normale";
                   break;
                case 2:
                   serviceEvalutation = "Bene";
                   break;
                    
            }
            
            switch(evalutations[i][4]){
                case 0:
                   cookEvalutation = "No";
                   break;
                case 1:
                   cookEvalutation = "Abbastanza";
                   break;
                case 2:
                   cookEvalutation = "Sì";
                   break;
                    
            }
            
            switch(evalutations[i][5]){
                case 0:
                   temperatureEvalutation = "No";
                   break;
                case 1:
                   temperatureEvalutation = "Abbastanza";
                   break;
                case 2:
                   temperatureEvalutation = "Sì";
                   break;
                    
            }
            
            return[serviceEvalutation, cookEvalutation, temperatureEvalutation];
            
        }
        
    }
    
    
};

//exports functions
exports.getEvalutationStatus = getEvalutationStatus; 
exports.addEvalutation = addEvalutation; 
exports.getEvalutation = getEvalutation; 