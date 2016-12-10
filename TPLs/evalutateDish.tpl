<!DOCTYPE html>
<html>
   <head>
      <meta charset="UTF-8">
      <title>Login Form</title>
      <link rel="stylesheet" href="resources/style.css">
   </head>
   <body>
      <div class = "menu"><a href="/home">Home page</a>&ensp;&ensp;&ensp;<a href="/logout">Logout</a></div>
      <h1 class = "message">Valuta la qualità dei (:dish:)</h1>
      <div class = "screen">
         <form action = "/evalutate_(:dish:)", method = "POST">
            <fieldset id="group1">
               <p><label>Come le è stata servita la pietanza?</label></p>
               <input type="radio" name="service" value="0"> Male
               <input type="radio" name="service" value="1" checked> Normale
               <input type="radio" name="service" value="2"> Bene
            </fieldset>
            <fieldset id="group2">
               <p><label>Secondo lei era ben cucinata?</label></p>
               <input type="radio" name="cook" value="0"> No
               <input type="radio" name="cook" value="1" checked> Abbastanza
               <input type="radio" name="cook" value="2"> Sì
            </fieldset>
            <fieldset id="group3">
               <p><label>La temperatura andava bene?</label></p>
               <input type="radio" name="temperature" value="0"> No
               <input type="radio" name="temperature" value="1" checked> Abbastanza
               <input type="radio" name="temperature" value="2"> Sì
            </fieldset>
            <br> <br>        
            <input type="submit" class="btn btn-primary btn-large btn-block" value="conferma">
         </form>
      </div>
   </body>
</html>