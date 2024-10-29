<?php
    include('../funcoes.php');
?>
<html>
<head>
    <title>Avaliação de conhecimento</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Questão 2</h1>
    <h2>Posso votar?</h2>
    <?php
        echo '<form action="votar.php" value="dados" method="get">';
        echo '<label>Digite sua idade:</label>';
        pularLinha();
        echo '<input name="idade" type="number" placeholder="Digite sua idade aqui"/>';
        pularLinha();
        echo '<label>Digite sua nacionalidade:</label>';
        pularLinha();
        echo '<input name="nacio" type="text" placeholder="Digite sua nacionalidade aqui"/>';
        pularLinha();
        echo '<input type="submit" placeholder="Enviar"/>';
        echo '</form>';
    ?>
</body>
</html>