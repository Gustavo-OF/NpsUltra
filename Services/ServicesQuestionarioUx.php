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
}
