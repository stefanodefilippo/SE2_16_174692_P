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
       
       <form action="http://127.0.0.1:1337/mondayReservation" method = "POST" id = mondayReservationsForm>
            <p>Lunedì (:mondayStatus:)<input type="submit" value = "modifica"></p>
       </form>
            
       <form action="http://127.0.0.1:1337/wednesdayReservation" method = "POST" id = wednesdayReservationsForm>
            <p>Mercoledì (:wednesdayStatus:)<input type="submit" value = "modifica"></p>
       </form>
       
       <form action="http://127.0.0.1:1337/fridayReservation" method = "POST" id = fridayReservationsForm>
            <p>Venerdì (:fridayStatus:)<input type="submit" value = "modifica"></p>
       </form>   
            
       
       <p>Valuta il servizio della settimana trascorsa: <input type="submit" value = "vai" onClick = "evalutateInput()"></p>
           
            <input type = "hidden" name = "typeOfRequest">
            <input type = "hidden" name = "id" value = "(:id:)">
    <br>
       
    (:if[resident] ~
        [:then ~ <font color="green"> sei residente </font> :]
        [:else ~ <font color="red"> non sei residente</font> :]
    :)
       
    </body>
</html>

(:if[primo == "pasta"] ~ [:then ~ selected :]:)