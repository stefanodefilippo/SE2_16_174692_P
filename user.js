//list of registered user, whith the entries in the form [id, username, password]
var users = [[1, "gigi", "hh"], [2, "t_deluca", "giu"], [3, "v_benvenuti", "cheiHis8k"], [4, "f_lucchesi", "2010"], [5, "a_ricci", "Blu"]];

/**
 * @brief authenticate a user.
 * @param username The username inserted by the user.
 * @param password The password inserted by the user.
 * @return A list containing information about the current state.
 */
var authenticate = function(username, password){
    for(var i = 0; i < users.length; i++){
        if(users[i][1] == username && users[i][2] == password){
            return ["Benvenuto, " + username, "TPLs/welcomePage.tpl", users[i][0], "loginSuccess"];
        }
    }
    if(username != undefined){
        return ["Username/password scorretto", "TPLs/loginForm.tpl", "", "loginFailed"];
    }else{
        return ["Devi prima effettuare l'accesso per accedere a questa risorsa", "TPLs/loginForm.tpl", "", "mustLogin"];
    }
}

//exports functions
exports.authenticate = authenticate; 