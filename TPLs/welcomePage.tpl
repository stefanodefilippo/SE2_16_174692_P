<!DOCTYPE html>
<html>
   <head>
      <!-- Here goes the metadata -->  
      <meta charset="utf-8">
      <title>Home</title>
      <link rel="stylesheet" href="resources/style.css">
   </head>
   <body>
      <div class = "menu"><a href="/logout">Logout</a></div>
      <h1 class = "message">(:message:)</h1>
      <div class="screen">
         <div class="app-title">
            <h2>Situazione prenotazioni per la settimana prossima</h2>
             *possibilità di compilare e modificare le prenotazioni fino a lunedì (:nextMonday:) escluso
         </div>
         <div class="control-group">
            <hr>
            <form action="/mondayReservation" method = "POST" id = mondayReservationsForm>
               <label>Lunedì:</label> <i class = "status">(:mondayStatus:)</i><input type="submit" class="btn btn-primary btn-large btn-block" value = "modifica">
            </form>
            <hr>
            <form action="/wednesdayReservation" method = "POST" id = wednesdayReservationsForm>
               <label>Mercoledì:</label><i class = "status"> (:wednesdayStatus:)</i><input type="submit" class="btn btn-primary btn-large btn-block" value = "modifica">
            </form>
            <hr>
            <form action="/fridayReservation" method = "POST" id = fridayReservationsForm>
               <label>Venerdì:</label> <i class = "status">(:fridayStatus:)</i><input type="submit" class="btn btn-primary btn-large btn-block" value = "modifica">
            </form>
            <hr>
         </div>
      </div>
      <div class="screen">
         <label>Valuta il servizio della settimana trascorsa: <a href="/evalutate">vai</a>  </label>
      </div>
   </body>
</html>