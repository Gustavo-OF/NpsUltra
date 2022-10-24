<!DOCTYPE html>
<html lang="br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="http://localhost/NPS/View/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="http://localhost/NPS/View/css/index.css?d=<?php echo uniqid()?>" rel="stylesheet" type="text/css" />
    <title>NPS - Ultra</title>
</head>
<body style="background-color: #c1c0c0;">
    <div class="container w-75 h-100" style="background-color: white;">
        <div class="icon_ultra d-flex justify-content-center">
            <img alt="logoUltra" src="View/images/icons/icon_ultra.png"/>
        </div>
        <div class="banner_ultra d-flex justify-content-center">
            <img alt="bannerUltra" src="View/images/topo.png" />
        </div>
        <h4 class="cor_pessoa text-center mt-3">Olá, <?php echo ucwords(strtolower($nomeF))?></h4>
        <div class="texto_mkt mt-4 d-flex justify-content-center">
            <br/>
            <img alt="textoUltra" src="View/images/texto_mkt.png"/>
        </div>
        <div class="questionario">
            
        </div>

        <div class="text-center pt-5 d-flex pb-3">
            <!-- <button type="button" class="btnUltra" onclick="fechaJanela()">Fechar página</button> -->
            <button type="button" class="btnUltra" style="background-color: #ab4894;border-color:#ab4894" id="btnEnviaPesquisa">Enviar pesquisa</button>
        </div>
    </div>
</body>
<script type="text/javascript" src="http://localhost/NPS/View/js/bootstrap.bundle.min.js"></script>
<script type="text/javascript" src="http://localhost/NPS/View/js/jquery-3.6.1.min.js?d=<?php echo uniqid() ?>"></script>
<script type="text/javascript" src="http://localhost/NPS/View/js/index.js?d=<?php echo uniqid() ?>"></script>
</html>
