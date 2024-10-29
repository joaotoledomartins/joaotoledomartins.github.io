<?php
    echo '<h2>Resposta do formulário</h2>';
    $parImpar = "";
    if(!(empty($_GET['num'])))
    {
        if(($_GET['num']) % 2 == 1)
        {
            $parImpar = "Ímpar";
        }
        else
        {
            $parImpar = "Par";
        }
    }
    else
    {
        echo "Dados não fornecidos";
        die();
    }
    echo '<ul><li>O número é ' . $parImpar . '.</li></ul>';
?>