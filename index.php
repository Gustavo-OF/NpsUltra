<?php 

require_once("Model/Database.php");
require_once("Controller/ControllerFuncoes.php");
require_once("Controller/ControllerQuestionarioUx.php");
require_once("Services/ServicesClienteUx.php");
require_once("Services/ServicesQuestionarioUx.php");
require_once("Routes/Rotas.php");
require_once __DIR__.'/vendor/autoload.php';



use Model\Database;
use Controller\ControllerFuncoes;
use Controller\ControllerQuestionarioUx;
use Services\ServicesClienteUx;
use Services\ServicesQuestionarioUx;
use Route\Rotas;

$database = new Database("ux");
$controllerFuncoes = new ControllerFuncoes();
$serviceClientesUx = new ServicesClienteUx($database,$controllerFuncoes);
$serviceQuestionarioUx = new ServicesQuestionarioUx($database);
$controllerQuestionarioUx = new ControllerQuestionarioUx($serviceQuestionarioUx);
$rotas = new Rotas($controllerQuestionarioUx);

// em producao trocar para $_server

$rotas->abrir($_REQUEST);



?>