var users = [[1, "gigi", "hh"], [2, "beppi", "giu"]];
             
var authenticate = function(username, password){
    for(var i = 0; i < users.length; i++){
        if(users[i][1] == username && users[i][2] == password){
            return ["Benvenuto, " + username, "./welcomePage.tpl", users[i][0], 200];
        }
    }
    if(username != undefined){
        return ["Username/password scorretto", "./loginForm.tpl", "", "loginFailed"];
    }else{
        return ["Devi prima effettuare l'accesso per accedere a questa risorsa", "./loginForm.tpl", "", "mustLogin"];
    }
}

//exports functions
exports.authenticate = authenticate; 