var mondayOptions = [["niente", "pasta aglio olio e peperoncino", "pasta in bianco", "pasta in brodo", "passato di verdura"], ["niente", "morbidelle di vitello", "pollo lesso", "formaggio", "affettato"], ["niente", "peperoni al forno", "patate bollite", "carote al tegame", "verdura fresca di stagione"], ["niente", "frutta fresca", "mousse di frutta"]];
var wednesdayOptions = [["niente", "pasta ai carciofi", "pasta in bianco", "pastina in brodo", "passato di verdura"], ["niente", "frittata al formaggio", "vitello lesso", "formaggio", "affettato"], ["niente", "finocchi all'olio", "patate lesse", "melanzane grigliate", "verdura fresca di stagione"], ["niente", "frutta di stagione", "mousse di frutta"]];
var fridayOptions = [["niente", "pasta zucchine e gamberi", "pasta in binaco", "pastina in brodo", "passato di verdura"], ["niente", "tomino", "manzo lesso", "carne tritata", "carne omogeneizzata"], ["niente", "peperonata", "patate lesse", "fagiolini al vapore", "verdura fresca di stagione"], ["niente", "frutta di stagione", "mousse di frutta"]];

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
    
    if(primo != undefined){
        var index = menu[0].indexOf(primo); 
        menu[0][index] = menu[0][0];
        menu[0][0] = primo;
    }
    
    if(secondo != undefined){
        var index = menu[1].indexOf(secondo); 
        console.log("eri "+menu[1].indexOf(secondo));
        menu[1][index] = menu[1][0];
        console.log(menu[1][0]);
        menu[1][0] = secondo;
        console.log(secondo);
        console.log(menu[1][4]);
    }
    
    if(contorno != undefined){
        var index = menu[2].indexOf(contorno);
        menu[2][index] = menu[2][0];
        menu[2][0] = contorno;
    }
    
    if(dessert != undefined){
        var index = menu[3].indexOf(dessert);
        menu[3][index] = menu[3][0];
        menu[3][0] = dessert;
    }
    
    return menu;
    
    
}

//exports functions
exports.getMenu = getMenu; 