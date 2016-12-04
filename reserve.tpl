<!DOCTYPE html>
<html>
    
<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script src=""/script/script.js""></script> 
</head>
    
<body>
<h1>Compila la tua prenotazione per (:dayReservation:)</h1>
    
<form action="/addReservation(:dayReservation:)" method = "POST">
    <p><select name = "primo" onchange="changeImageFunction()">
          <option value= "(:pfirst:)">(:pfirst:)</option>
          <option value= "(:psecond:)">(:psecond:)</option>
          <option value= "(:pthird:)">(:pthird:)</option>
          <option value= "(:pfourth:)">(:pfourth:)</option>
          <option value= "(:pfivth:)">(:pfivth:)</option>
    </select><img id = "cioa" onclick="getElementById('cioa').src = '/img_(:pfirst:)'" src="/img_(:pfirst:)" alt="Smiley face" height="42" width="42">
</p>
     
    <br>
    
    <p><select name = "secondo">
        <option value= "(:sfirst:)">(:sfirst:)</option>
        <option value="(:ssecond:)">(:ssecond:)</option>
        <option value="(:sthird:)">(:sthird:)</option>
        <option value="(:sfourth:)">(:sfourth:)</option>
        <option value="(:sfivth:)">(:sfivth:)</option>
        </select></p>
     
    <br>
    
    <p><select name = "contorno"> 
          <option value= "(:cfirst:)">(:cfirst:)</option>
          <option value="(:csecond:)">(:csecond:)</option>
          <option value="(:cthird:)">(:cthird:)</option>
          <option value="(:cfourth:)">(:cfourth:)</option>
          <option value="(:cfivth:)">(:cfivth:)</option>
        </select></p>
     
    <br>
    
    <p><select name = "dessert">
          <option value= "(:dfirst:)">(:dfirst:)</option>
          <option value="(:dsecond:)">(:dsecond:)</option>
          <option value="(:dthird:)">(:dthird:)</option>
    </select></p>
    
    <br>
    
    <input type = "submit" value = "fatto">
    
</form> 

</body>
</html>
