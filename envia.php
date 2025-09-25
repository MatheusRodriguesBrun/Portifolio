<?php

    $nome = addcslashes($_POST['nome']);
    $email = addcslashes($_POST['email']);
    $celular = addcslashes($_POST['celular'])
    $mensagem = addcslashes($_POST['mensagem'])

    $destino = "matheusrodriguesbrun@gmail.com";
    $assunto = "Olá, vim pela sua página Web!";

    $corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Celular: ".$celular"\n"."Mensagem: ".$mensagem;

    $cabeca = "From: matheusrodriguesbrun@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($destino,$assunto,$corpo,$cabeca)){
        echo("Email enviado com sucesso!")
    }else{
        echo("Houve um erro ao enviar o email!")    
    }

?>