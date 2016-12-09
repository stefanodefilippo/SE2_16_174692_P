<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <title>Login Form</title>
  
  
  
      <link rel="stylesheet" href="resources/style.css">

  
</head>
<body>
    
    <div class = "menu"><a href="/home">Home page</a>&ensp;&ensp;&ensp;<a href="/logout">Logout</a></div>
    
    <h1 class = "message">Situazione questionari</h1>
    
   <div class = "screen"> 

       <p><label>questionario primi: </label><i class = "status">(:if[primiStatus] ~ [:then ~ <i>completo </i> <a href="/showEvalutation_primi">visualizza</a> :][:else ~ <i>incompleto </i> <a href="/evalutate_primi">compila</a> :]:)</i></p>

       <hr>
       
       <p><label>questionario secondi: </label><i class = "status">(:if[secondiStatus] ~ [:then ~ <i>completo </i> <a href="/showEvalutation_secondi">visualizza</a> :][:else ~ <i>incompleto </i> <a href="/evalutate_secondi">compila</a> :]:)</i></p>

       <hr>
       
       <p><label>questionario contorni: </label><i class = "status">(:if[contorniStatus] ~ [:then ~ <i>completo </i> <a href="/showEvalutation_contorni">visualizza</a> :][:else ~ <i>incompleto </i> <a href="/evalutate_contorni">compila</a> :]:)</i></p>

       <hr>
       
       <p><label>questionario dessert: </label><i class = "status">(:if[dessertStatus] ~ [:then ~ <i>completo </i> <a href="/showEvalutation_dessert">visualizza</a> :][:else ~ <i>incompleto </i> <a href="/evalutate_dessert">compila</a> :]:)</i></p>
    
    </div>

</body>
</html>

