<?php 

namespace Controller;

use Services\ServicesQuestionarioUx;

class ControllerQuestionarioUx{

    private ServicesQuestionarioUx $serviceQuestionarioUx;

    public function __construct(ServicesQuestionarioUx $serviceQuestionarioUx)
    {
        $this->serviceQuestionarioUx = $serviceQuestionarioUx;
    }

    /**
     * Recebe os questionarios e transforma em JSON para o JS
     */
    public function getQuestionarioUx():string {
        $retorno = $this->serviceQuestionarioUx->getQuestionarioUx();
        
        return json_encode($retorno);
    }

}



?>