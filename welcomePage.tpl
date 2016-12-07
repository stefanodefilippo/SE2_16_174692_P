<!DOCTYPE html>
<html>
   <head>
      <!-- Here goes the metadata -->  
      <meta charset="utf-8">
      <title> Home </title>
      <script src="/script/script.js"></script>
   </head>
   <body>
       <h1>(:message:)</h1>
       <h2>Situazione prenotazioni per la settimana (:nextMonday:) / (:endWeek:)</h2>
       
       <form action="/mondayReservation" method = "POST" id = mondayReservationsForm>
            <p>Lunedì (:mondayStatus:)<input type="submit" value = "modifica"></p>
       </form>
            
       <form action="/wednesdayReservation" method = "POST" id = wednesdayReservationsForm>
            <p>Mercoledì (:wednesdayStatus:)<input type="submit" value = "modifica"></p>
       </form>
       
       <form action="/fridayReservation" method = "POST" id = fridayReservationsForm>
            <p>Venerdì (:fridayStatus:)<input type="submit" value = "modifica"></p>
       </form>   
            
       
       <p>Valuta il servizio della settimana trascorsa: <a href="/evalutate">vai</a>  </p>
           
            <input type = "hidden" name = "typeOfRequest">
            <input type = "hidden" name = "id" value = "(:id:)">
    <br>
       
    </body>
</html>
