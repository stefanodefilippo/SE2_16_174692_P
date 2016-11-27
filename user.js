var users = [[1, "gigi", "hh"], [2, "beppi", "giu"]];
             
var authenticate = function(username, password){
    for(var i = 0; i < users.length; i++){
        if(users[i][1] == username && users[i][2] == password){
            return ["Welcome, " + username, "./welcomePage.tpl", users[i][0]];
        }
    }
    return ["Incorrect username/password", "./loginForm.tpl", ""];
}

//exports functions
exports.authenticate = authenticate; 