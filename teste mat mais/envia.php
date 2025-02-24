<?php
    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $telefone = addslashes($_POST['telefone']);
    $mensagem = addslashes($_POST['mensagem']);

    $destinatario = "joaopedrotoledomartins@gmail.com";
    $assunto = "Coleta de Dados — Matemática Mais";

    $corpo = "Nome: " . $nome . "\n" . 
    "E-mail: " . $email . "\n" .
    "Tel.: " . $telefone . "\n" .
    "Mensagem: " . $mensagem;

    $remetente = "From: joao.deputado64@gmail.com" . "\n" . "Reply-to: " . $email . "\n" . "X=Mailer:PHP/" . phpversion();

    if(mail($destinatario, $assunto, $corpo, $remetente)){
        echo("E-mail enviado com sucesso!");
    }
    else{
        echo("Houve um erro ao enviar o e-mail!");
    }
?>