//list representing the monday menu
var mondayOptions = [["niente", "pasta aglio olio e peperoncino", "pasta in bianco", "pasta in brodo", "passato di verdura"], ["niente", "morbidelle di vitello", "pollo lesso", "formaggio", "affettato"], ["niente", "peperoni al forno", "patate bollite", "carote al tegame", "verdura fresca di stagione"], ["niente", "frutta fresca", "mousse di frutta"]];
//list representing the wednesday menu
var wednesdayOptions = [["niente", "pasta ai carciofi", "pasta in bianco", "pastina in brodo", "passato di verdura"], ["niente", "frittata al formaggio", "vitello lesso", "formaggio", "affettato"], ["niente", "finocchi all'olio", "patate lesse", "melanzane grigliate", "verdura fresca di stagione"], ["niente", "frutta di stagione", "mousse di frutta"]];
//list representing the friday menu
var fridayOptions = [["niente", "pasta zucchine e gamberi", "pasta in binaco", "pastina in brodo", "passato di verdura"], ["niente", "tomino", "manzo lesso", "carne tritata", "carne omogeneizzata"], ["niente", "peperonata", "patate lesse", "fagiolini al vapore", "verdura fresca di stagione"], ["niente", "frutta di stagione", "mousse di frutta"]];

/**
 * @brief It gets the menu for the specified day of the week.
 * @param primo The dish that must be on the top in the "primo" section of the menu.
 * @param secondo The dish that must be on the top in the "secondo" section of the menu.
 * @param contorno The dish that must be on the top in the "contorno" section of the menu.
 * @param dessert The dish that must be on the top in the "dessert" section of the menu.
 * @param dayReservation The day which the menu refers.
 * @return the menu in the form of a list of lists.
 */
var getMenu = function(primo, secondo, contorno, dessert, dayReservation){
    
    var menu = mondayOptions;
    
    switch(dayReservation){
            
        case "lunedì":
            menu = mondayOptions;
            break;
            
        case "mercoledì":
            menu = wednesdayOptions;
            break;
            
        case "venerdì":
            menu = fridayOptions;
            break;
            
    }
    
    var index;
    
    if(primo != undefined){
        index = menu[0].indexOf(primo); 
        menu[0][index] = menu[0][0];
        menu[0][0] = primo;
    }
    
    if(secondo != undefined){
        index = menu[1].indexOf(secondo); 
        menu[1][index] = menu[1][0];
        menu[1][0] = secondo;
    }
    
    if(contorno != undefined){
        index = menu[2].indexOf(contorno);
        menu[2][index] = menu[2][0];
        menu[2][0] = contorno;
    }
    
    if(dessert != undefined){
        index = menu[3].indexOf(dessert);
        menu[3][index] = menu[3][0];
        menu[3][0] = dessert;
    }
    
    return menu;
    
    
};

//exports functions
exports.getMenu = getMenu; 