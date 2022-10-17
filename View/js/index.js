$(function () {
    $.ajax({
        url: 'http://localhost/NPS/questionario/busca_questionario',
        type: "GET",
        success: function (data) {
            data = JSON.parse(data);
            console.log(data);
            let inputResposta = "";
            for (let i = 0; i < data.length; i++) {
                if(data[i].TIPO_PERGUNTA == "NOTA"){
                    inputResposta = geraNota(data[i].ID_PERGUNTA_NPS);
                }else if(data[i].TIPO_PERGUNTA == "TEXTO"){
                    inputResposta = "<textarea class='form-control text-center pergunta"+data[i].ID_PERGUNTA_NPS+"' style='width:50%;margin-left:25%'></textarea>";
                }else if(data[i].TIPO_PERGUNTA == "RADIO"){
                    inputResposta = "<div class='text-center'><button type='button' class='btn-primary btnNps pergunta"+data[i].ID_PERGUNTA_NPS+"'>Sim</button><button type='button' class='btn-primary btnNps pergunta"+data[i].ID_PERGUNTA_NPS+"'>Não</button></div>";
                }else{
                    if(data[i].ID_PERGUNTA_NPS == 21){
                        inputResposta = "<div class='text-center'><input class='pergunta"+data[i].ID_PERGUNTA_NPS+"' type='radio' name='' value='Sim'/><label for='sim' style='margin-right:10px'>Sim</label><input class='pergunta"+data[i].ID_PERGUNTA_NPS+"' type='radio' name='' value='Não'/><label for='nao' style='margin-right:10px'>Não</label><input type='radio' id='personal' name='' value='Não'/><label for='personal'>Tenho personal</label></div>"
                    }else if(data[i].ID_PERGUNTA_NPS == 22){
                        inputResposta = "<div class='text-center'><input class='pergunta"+data[i].ID_PERGUNTA_NPS+"' type='radio' name='' value='Sim'/><label for='sim' style='margin-right:10px'>Sim</label><input class='pergunta"+data[i].ID_PERGUNTA_NPS+"' type='radio' name='' value='Não'/><label for='nao' style='margin-right:10px'>Não</label><input type='radio' id='naoSabia' name='' value='Não'/><label for='naoSabia'>Não sabia desse benefício</label></div>"
                    }
                }
                if(data[i].ID_PERGUNTA_NPS != 3){
                    $(".questionario").append(
                        "<h6 class='text-center pt-3'>"+data[i].PERGUNTA+"</h6>"+
                        inputResposta
                    )
                }else{
                    $(".questionario").append(
                        "<div class='text-center d-flex justify-content-center pt-3'><input type='checkbox'/><h6 class='text-center pt-1'>"+data[i].PERGUNTA+"</h6></div>"
                    )
                }
                
                inputResposta = "";
            }
        }
    });
    function escolheNota(){
        $()
    }

    function geraNota(idPergunta){
        let divNota = '<div class="divNotas d-inline-flex justify-content-center">';
        divNota = divNota.concat('<div class="notaNA d-flex pergunta'+idPergunta+'" onclick="escolheNota()" onmouseover="this.style.backgroundColor = \'rgb(210,225,225)\'" onmouseout="this.style.backgroundColor = \'rgb(202,193,193)\'" style="background-color: rgb(202,193,193);">N/A</div>');
        divNota = divNota.concat('<div class="nota d-flex pergunta'+idPergunta+'" onclick="escolheNota()" onmouseover="this.style.backgroundColor = \'rgb(241, 102, 137)\'" onmouseout="this.style.backgroundColor = \'rgb(233,64,105)\'" style="background-color: rgb(233,64,105);">0</div>');
        divNota = divNota.concat('<div class="nota d-flex pergunta'+idPergunta+'" onclick="escolheNota()" onmouseover="this.style.backgroundColor = \'rgb(238,129,138)\'" onmouseout="this.style.backgroundColor = \'rgb(230,91,105)\'" style="background-color: rgb(230,91,105);">1</div>');
        divNota = divNota.concat('<div class="nota d-flex pergunta'+idPergunta+'" onclick="escolheNota()" onmouseover="this.style.backgroundColor = \'rgb(241,148,137)\'" onmouseout="this.style.backgroundColor = \'rgb(233,110,101)\'" style="background-color: rgb(233,110,101);">2</div>');
        divNota = divNota.concat('<div class="nota d-flex pergunta'+idPergunta+'" onclick="escolheNota()" onmouseover="this.style.backgroundColor = \'rgb(244,166,126)\'" onmouseout="this.style.backgroundColor = \'rgb(236,128,94)\'" style="background-color: rgb(236,128,94);">3</div>');
        divNota = divNota.concat('<div class="nota d-flex pergunta'+idPergunta+'" onclick="escolheNota()" onmouseover="this.style.backgroundColor = \'rgb(247,184,118)\'" onmouseout="this.style.backgroundColor = \'rgb(239,146,86)\'" style="background-color: rgb(239,146,86);">4</div>');
        divNota = divNota.concat('<div class="nota d-flex pergunta'+idPergunta+'" onclick="escolheNota()" onmouseover="this.style.backgroundColor = \'rgb(250,196,108)\'" onmouseout="this.style.backgroundColor = \'rgb(242,158,76)\'" style="background-color: rgb(242,158,76);">5</div>');
        divNota = divNota.concat('<div class="nota d-flex pergunta'+idPergunta+'" onclick="escolheNota()" onmouseover="this.style.backgroundColor = \'rgb(254,210,89)\'" onmouseout="this.style.backgroundColor = \'rgb(246,176,57)\'" style="background-color: rgb(246,176,57);">6</div>');
        divNota = divNota.concat('<div class="nota d-flex pergunta'+idPergunta+'" onclick="escolheNota()" onmouseover="this.style.backgroundColor = \'rgb(257,227,67)\'" onmouseout="this.style.backgroundColor = \'rgb(249,189,35)\'" style="background-color: rgb(249,189,35);">7</div>');
        divNota = divNota.concat('<div class="nota d-flex pergunta'+idPergunta+'" onclick="escolheNota()" onmouseover="this.style.backgroundColor = \'rgb(237,233,91)\'" onmouseout="this.style.backgroundColor = \'rgb(229,195,59)\'" style="background-color: rgb(229,195,59);">8</div>');
        divNota = divNota.concat('<div class="nota d-flex pergunta'+idPergunta+'" onclick="escolheNota()" onmouseover="this.style.backgroundColor = \'rgb(161,238,162)\'" onmouseout="this.style.backgroundColor = \'rgb(153,200,130)\'" style="background-color: rgb(153,200,130);">9</div>');
        divNota = divNota.concat('<div class="nota d-flex pergunta'+idPergunta+'" onclick="escolheNota()" onmouseover="this.style.backgroundColor = \'rgb(82,258,198)\'" onmouseout="this.style.backgroundColor = \'rgb(74,226,166)\'" style="background-color: rgb(74,226,166);">10</div></div>');
        divNota = divNota.concat('<div class="container d-flex justify-content-center"><hr style="width:80%;" /></div>');
        divNota = divNota.concat("</div>");
        return divNota
    }
});