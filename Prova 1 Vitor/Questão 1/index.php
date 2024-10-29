<?php
    include('../funcoes.php');
?>
<html>
<head>
    <title>Avaliação de conhecimento</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Questão 1</h1>
    <h2>Digite um número e verifique se ele é par ou ímpar</h2>
    <?php
        echo '<form action="number.php" value="num" method="get">';
        echo '<label>Número</label>';
        pularLinha();
        echo '<input name="num" type="number" placeholder="Digite seu número aqui"/>';
        pularLinha();
        echo '<input type="submit"/>';
        echo '</form>';
    ?>
</body>
</html>