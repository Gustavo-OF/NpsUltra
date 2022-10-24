<?php

namespace Route;

use Controller\ControllerQuestionarioUx;

class Rotas
{

    private ControllerQuestionarioUx $controllerQuestionarioUx;

    /**
     * Construtor
     *
     * @return void
     */
    public function __construct(
        ControllerQuestionarioUx $controllerQuestionarioUx
    ) {
        $this->controllerQuestionarioUx = $controllerQuestionarioUx;
    }

    /**
     * Método para redirecionar a requisição. Recebe $_REQUEST como parametro
     *
     * @param  mixed $req
     * @return void
     */
    public function abrir($req)
    {
        // em producao dar explode no script_url

        $json = file_get_contents('php://input');
        $obj = json_decode($json);

        if (isset($req['url'])) {
            $url = explode("/", $req['url']);
        } else {
            $url = "";
        }

        $classe = isset($url[0]) ? $url[0] : "";
        $metodo = isset($url[1]) ? $url[1] : "";
        switch ($classe) {
            case 'questionario':
                switch ($metodo) {
                    case 'busca_questionario':
                        echo $this->controllerQuestionarioUx->getQuestionarioUx();
                        break;
                    case 'insere_questionario':
                        echo $this->controllerQuestionarioUx->insereQuestionario($_POST);
                        break;
                }
            default:
                if (empty($classe) && isset($req['a1']) && is_numeric($req['a1'])) {
                    $this->controllerQuestionarioUx->carregaPaginaInicial($req['a1']);
                }
                break;
        }
    }
}
