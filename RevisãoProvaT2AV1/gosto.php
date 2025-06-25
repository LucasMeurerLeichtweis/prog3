<?php
$local = $_GET["local"];
$formacao = $_GET["formacao"];
$estilos = $_GET["estilo"] ?? []; // previne erro caso nada seja marcado

function sugerirArtistas($local, $formacao, $estilos) {
    $sugestoes = [];

    // Caso com ambos os estilos (mais específico)
    if ($local === "nacional" && $formacao === "cantor" && in_array("Rock", $estilos) && in_array("Gaucha", $estilos)) {
        $sugestoes[] = "Juliano Gomes";
    }
    elseif ($local === "nacional" && $formacao === "Banda" && in_array("Rock", $estilos) && in_array("Gaucha", $estilos)) {
        $sugestoes[] = "Rock de Galpão";
    }
    else {
        // Só Rock
        if ($local === "nacional" && $formacao === "Banda" && in_array("Rock", $estilos)) {
            $sugestoes[] = "Legião Urbana";
        }
    
        if ($local === "nacional" && $formacao === "cantor" && in_array("Rock", $estilos)) {
            $sugestoes[] = "Cazuza";
        }
    
        if ($local === "internacional" && $formacao === "Banda" && in_array("Rock", $estilos)) {
            $sugestoes[] = "Queen";
        }
    
        if ($local === "internacional" && $formacao === "cantor" && in_array("Rock", $estilos)) {
            $sugestoes[] = "Elvis Presley";
        }
    
        // Só Gaúcha
        if ($local === "nacional" && $formacao === "cantor" && in_array("Gaucha", $estilos)) {
            $sugestoes[] = "Luiz Marenco";
        }
    
        if ($local === "nacional" && $formacao === "Banda" && in_array("Gaucha", $estilos)) {
            $sugestoes[] = "Os Monarcas";
        }
    }

    return array_unique($sugestoes);
}



$sugestoes = sugerirArtistas($local, $formacao, $estilos);
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Resultado do Gosto Musical</title>
</head>
<body>
    <h2>Seus dados enviados:</h2>
    <p><strong>Local:</strong> <?= htmlspecialchars($local) ?></p>
    <p><strong>Formação:</strong> <?= htmlspecialchars($formacao) ?></p>
    <p><strong>Estilos:</strong> <?= htmlspecialchars(implode(", ", $estilos)) ?></p>

    <h2>Sugestões para você:</h2>
    <?php if (count($sugestoes) > 0): ?>
        <?php foreach ($sugestoes as $artista): 
            $nomeImagem = strtolower(str_replace(' ', '-', $artista)) . ".png";
            $caminhoImagem = "arquivos/" . $nomeImagem;
        ?>
            <div style="text-align: center; margin-bottom: 30px;">
                <p>Você pode gostar de...</p>
                <?php if (file_exists($caminhoImagem)): ?>
                    <img src="<?= $caminhoImagem ?>" alt="<?= htmlspecialchars($artista) ?>" width="200"><br>
                <?php else: ?>
                    <div style="width:200px; height:200px; background:#eee; display:inline-block;">Imagem não encontrada</div><br>
                <?php endif; ?>
                <strong><?= htmlspecialchars($artista) ?></strong><br><br>
                <a href="index.php" style="color: blue;">Retornar</a>
            </div>
        <?php endforeach; ?>
    <?php else: ?>
        <p>Nenhuma sugestão encontrada para sua combinação.</p>
        <a href="index.php" style="color: blue;">Retornar</a>
    <?php endif; ?>
</body>
</html>

