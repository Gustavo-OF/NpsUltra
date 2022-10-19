<?php

namespace Services;

require_once("Model/PerguntaNPS.php");

use Model\Database;
use Model\PerguntasNPS;

class ServicesQuestionarioUx
{
    private Database $database;

    public function __construct(Database $database)
    {
        $this->database = $database;
    }

    /**
     * Pega as perguntas do NPS na base.
     *
     * @param  mixed $param
     * @param  mixed $codUnidade
     * @return array
     */
    public function getQuestionarioUx(): array
    {
        if ($this->database->connect()) {
            $this->database->connect();
        }
        $retorno = "";
        $questionario = [];
        $retorno = $this->database->select("TB_PERGUNTA_NPS", "*", [], "", []);
        if (!empty($retorno)) {
            for ($i = 0; $i < count($retorno); $i++) {
                $questionario[$i] = new PerguntasNPS(
                    $retorno[$i]['ID_PERGUNTA_NPS'],
                    $retorno[$i]['PERGUNTA'],
                    $retorno[$i]['GRUPO_PERGUNTA'],
                    $retorno[$i]['TIPO_PERGUNTA']
                );
            }
        }

        $this->database->disconnect();
        return $retorno;
    }

    public function insereResposta(Array $respostas): void
    {
        if ($this->database->connect()) {
            $this->database->connect();
        }
        
        $insereNPS = $this->database->insert("TB_ALUNO_NPS",["ID_PESSOAS, DATA_PREENCHIMENTO"],["'84169'","'".date("Y-m-d H:i:s")."'"]);
        $retornaNPS = $this->database->select("TB_ALUNO_NPS","TOP 1 ID_ALUNO_NPS",[],"ID_PESSOAS = ?",["84169"]," ID_ALUNO_NPS DESC");
        $campo = "";
        for($i = 1; $i < count($respostas);$i++){

            if(is_numeric($respostas[$i]) || $respostas[$i] == "N/A"){
                $campo = "NOTA";
            }else if($respostas[$i] == "Sim"){
                $campo = "SIM";
                $respostas[$i] = 1;
            }else if($respostas[$i] == "Não"){
                $campo = "NAO";
                $respostas[$i] = 1;
            }else if($respostas[$i] == "Tenho personal" || $respostas[$i] == "Nao sabia desse beneficio"){
                $campo = "OUTROS";
                $respostas[$i] = 1;
            }else if($i == 3){
                if($respostas[$i] == "true"){
                    $respostas[$i] = 1;
                    $campo = "SIM";
                }else{
                    $respostas[$i] = 1;
                    $campo = "NAO";
                }
            }else{
                $campo = "COMENTARIO";
            }

            echo $this->database->insert("TB_RESPOSTA_NPS",
                ["ID_ALUNO_NPS","ID_PERGUNTA_NPS",$campo],
                [$retornaNPS[0]['ID_ALUNO_NPS'],$i,"'".$respostas[$i]."'"]
            );
        }
        $this->database->disconnect();
    }
}
