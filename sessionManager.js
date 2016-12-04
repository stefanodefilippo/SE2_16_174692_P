var processSession = function(status, file, request, message, path, response){
    
    if(path == "/login" && request.session.id_user != null){
        
        status = "alreadyAuth";
        response.redirect("/home");
        return true;
        
    }
    
    if(path == "/login" && status == "mustLogin"){
        
        return true;
        
    }
    
    if(path == "/home" && status == "alreadyAuth"){
        
        message = "Hai già effettuato l'accesso!";
        return true;
        
    }
    
    if(path != "/login" && request.session.id_user == null){
        
        status = "mustLogin";
        message = "Devi prima effettuare l'accesso per accedere a questa risorsa";
        response.redirect("/login");
        return true;
        
    }
    
}