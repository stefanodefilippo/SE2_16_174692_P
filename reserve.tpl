<!DOCTYPE html>
<html>
<body>
<h1>Compila la tua prenotazione per (:dayReservation:)</h1>
    
<form action="http://127.0.0.1:1337/addReservation(:dayReservation:)" method = "POST">
    <select name = "primo">
          <option value= "(:pfirst:)">(:pfirst:)</option>
          <option value= "(:psecond:)">(:psecond:)</option>
          <option value= "(:pthird:)">(:pthird:)</option>
          <option value= "(:pfourth:)">(:pfourth:)</option>
          <option value= "(:pfivth:)">(:pfivth:)</option>
    </select>
     
    <br>
    
    <select name = "secondo">
        <option value= "(:sfirst:)">(:sfirst:)</option>
        <option value="(:ssecond:)">(:ssecond:)</option>
        <option value="(:sthird:)">(:sthird:)</option>
        <option value="(:sfourth:)">(:sfourth:)</option>
        <option value="(:sfivth:)">(:sfivth:)</option>
    </select>
     
    <br>
    
    <select name = "contorno"> 
          <option value= "(:contorno:)">(:contorno:)</option>
          <option value="peperoni al forno">peperoni al forno</option>
          <option value="patate bollite">patate bollite</option>
          <option value="carote al tegame">carote al tegame</option>
          <option value="verdura fresca di stagione">verdura fresca di stagione</option>
    </select>
     
    <br>
    
    <select name = "dessert">
          <option value= "(:dessert:)">(:dessert:)</option>
          <option value="frutta fresca">frutta fresca</option>
          <option value="mousse di frutta">mousse di frutta</option>
    </select>
    
    <br>
    
    <input type = "submit" value = "fatto">
    
</form> 

</body>
</html>
