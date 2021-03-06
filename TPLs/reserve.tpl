<!DOCTYPE html>
<html >
   <head>
      <meta charset="UTF-8">
      <title>Prenotazione</title>
      <link rel="stylesheet" href="resources/style.css">
   </head>
   <div class = "menu"><a href="/home">Home page</a>&ensp;&ensp;&ensp;<a href="/logout">Logout</a></div>
   <body>
      <h1 class = "message">Compila la tua prenotazione per (:dayReservation:)</h1>
      <div class="screen">
         <form action="/addReservation(:dayReservation:)" method = "POST">
            <p>
               <select name = "primo">
                  <option value= "(:pfirst:)">(:pfirst:)</option>
                  <option value= "(:psecond:)">(:psecond:)</option>
                  <option value= "(:pthird:)">(:pthird:)</option>
                  <option value= "(:pfourth:)">(:pfourth:)</option>
                  <option value= "(:pfivth:)">(:pfivth:)</option>
               </select>
            </p>
            <br>
            <p>
               <select name = "secondo">
                  <option value= "(:sfirst:)">(:sfirst:)</option>
                  <option value="(:ssecond:)">(:ssecond:)</option>
                  <option value="(:sthird:)">(:sthird:)</option>
                  <option value="(:sfourth:)">(:sfourth:)</option>
                  <option value="(:sfivth:)">(:sfivth:)</option>
               </select>
            </p>
            <br>
            <p>
               <select name = "contorno">
                  <option value= "(:cfirst:)">(:cfirst:)</option>
                  <option value="(:csecond:)">(:csecond:)</option>
                  <option value="(:cthird:)">(:cthird:)</option>
                  <option value="(:cfourth:)">(:cfourth:)</option>
                  <option value="(:cfivth:)">(:cfivth:)</option>
               </select>
            </p>
            <br>
            <p>
               <select name = "dessert">
                  <option value= "(:dfirst:)">(:dfirst:)</option>
                  <option value="(:dsecond:)">(:dsecond:)</option>
                  <option value="(:dthird:)">(:dthird:)</option>
               </select>
            </p>
            <br>
            <input type = "submit" class="btn btn-primary btn-large btn-block" value = "conferma">
         </form>
      </div>
   </body>
</html>