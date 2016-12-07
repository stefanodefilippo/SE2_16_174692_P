<!DOCTYPE html>
<html>
<body>
    <h1>Valuta la qualità dei (:dish:)</h1>

    <form action = "/evalutate_(:dish:)", method = "POST">
        
        <fieldset id="group1">
        <p>Come le è stata servita la pietanza?</p>
            <input type="radio" name="service" value="0"> Male
            <input type="radio" name="service" value="1" checked> Normale
            <input type="radio" name="service" value="2"> Bene
        </fieldset>
        
        <fieldset id="group2">
         <p>Secondo lei era ben cucinata?</p>
            <input type="radio" name="cook" value="0"> No
            <input type="radio" name="cook" value="1" checked> Abbastanza
            <input type="radio" name="cook" value="2"> Sì
        </fieldset>
         
        <fieldset id="group3">
        <p>La temperatura andava bene?</p>
            <input type="radio" name="temperature" value="0"> No
            <input type="radio" name="temperature" value="1" checked> Abbastanza
            <input type="radio" name="temperature" value="2"> Sì
        </fieldset>
                 
        <input type="submit" value="conferma">
        
    </form>

</body>
</html>
