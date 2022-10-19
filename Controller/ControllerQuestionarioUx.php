<?php 

namespace Controller;

use Services\ServicesQuestionarioUx;
use Controller\ControllerFuncoes;
use Services\ServicesClienteUx;

class ControllerQuestionarioUx{

    private ServicesQuestionarioUx $serviceQuestionarioUx;
    private ServicesClienteUx $servicesClienteUx;

    public function __construct(ServicesQuestionarioUx $serviceQuestionarioUx, ServicesClienteUx $servicesClienteUx)
    {
        $this->serviceQuestionarioUx = $serviceQuestionarioUx;
        $this->servicesClienteUx = $servicesClienteUx;
    }

    public function carregaPaginaInicial($idPessoas)
    {
        $nomeAluno = $this->servicesClienteUx->getClientUx($idPessoas);
        if($nomeAluno != "400"){
            $nomeAluno = explode(" ",$nomeAluno);
            $conta = count($nomeAluno);
            $nomeF = $nomeAluno[0]." ".$nomeAluno[$conta-1];
            include_once __DIR__ . "/../view/index.php";    
        }else{
            include_once __DIR__ . "/../view/erro.php";    

        }
    }

    /**
     * Recebe os questionarios e transforma em JSON para o JS
     */
    public function getQuestionarioUx():string {
        $retorno = $this->serviceQuestionarioUx->getQuestionarioUx();
        
        return json_encode($retorno);
    }

    public function insereQuestionario($resultado):int {

        $this->serviceQuestionarioUx->insereResposta(
            $resultado['respostas']
        );

        return json_encode(1);
    }

}



?>