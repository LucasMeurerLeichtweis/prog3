<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gosto Musical</title>
</head>
<body>

    <main>
    <h2>Gosto Musical</h2>

    <form method="get" action="gosto.php">
        
        <div>
            <p>Música:</p>
            <label><input type="radio" name="local" value="nacional" required> Música Nacional</label><br>
            <label><input type="radio" name="local" value="internacional"required> Música Internacional</label>
        </div>

        
        <div>
            <p>Formação:</p>
            <label><input type="radio" name="formacao" value="Banda" required> Banda</label><br>
            <label><input type="radio" name="formacao" value="cantor"required> Cantor</label><br>
            
        </div>

        
        <div>
            <p>Estilos Musicais:</p>
            <label><input type="checkbox" name="estilo[]" value="Rock"> Rock</label><br>
            <label><input type="checkbox" name="estilo[]" value="Gaucha"> Gaúcha</label><br>

        </div>

        
        <div>
            <button type="submit" name = "botao">Enviar</button>
        </div>
    </form>
</main>

    
</body>
</html>