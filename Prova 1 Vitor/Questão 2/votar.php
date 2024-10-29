<?php
    echo '<h2>Resposta do formulário</h2>';
    $parImpar = "";
    if(!(empty($_GET['idade'])) && !(empty($_GET['nacio'])))
    {
        $idade = $_GET['idade'];
        $nacio = $_GET['nacio'];
        if($idade >= 18 && $idade <= 70 && $nacio == "brasileira")
        {
            echo 'Você está apto para votar!';
        }
        else
        {
            if((($idade >= 16 && $idade <= 17) || ($idade > 70)) && ($nacio == "brasileira"))
            {
                echo 'Seu voto é facultativo';
            }
            else
            {
                echo 'Você não pode votar';
            }
        }
    }
    else
    {
        echo "Dados não fornecidos";
        die();
    }
?>