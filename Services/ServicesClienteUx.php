<?php

namespace Services;

use Controller\ControllerFuncoes;
use Model\Database;

class ServicesClienteUx{
    private Database $database;
    private ControllerFuncoes $controllerFuncoes;

    public function __construct(Database $database, ControllerFuncoes $controllerFuncoes){
        $this->database = $database;
        $this->controllerFuncoes = $controllerFuncoes;
    }
    
    /**
     * Pega os clientes da base de acordo com a pesquisa.
     *
     * @param  mixed $param
     * @param  mixed $codUnidade
     * @return array
     */
    public function getClientUx($idPessoas): string{
        try{
            if($this->database->connect()){
                $this->database->connect();
            }
            $retorno = "";
            $pesquisa = $this->controllerFuncoes->remover_Injection($idPessoas);
            $retorno = $this->database->select("TB_PESSOAS P","NOME",[],"ID_PESSOAS = ?",[$pesquisa]);
            $this->database->disconnect();
            if(isset($retorno[0]['NOME'])){
                return $retorno[0]['NOME'];
            }else{
                return "400";
            }
        }catch(\Exception $e){
            return "400";       
        }
    }
    
}





?>