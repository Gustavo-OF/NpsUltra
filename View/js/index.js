function escolheNota(event, idPergunta) {
    let classes = event.target.className.split(" ");
    let id = event.target.id;

    if ($(".pergunta" + idPergunta).hasClass("selecionaResposta")) {
        $(".pergunta" + idPergunta).removeClass("selecionaResposta");
    }
    $("#" + id).addClass("selecionaResposta");

}

function escolheSimNao(event, idPergunta) {
    let classes = event.target.className.split(" ");
    let id = event.target.id;
    if ($(".pergunta" + idPergunta).hasClass("selecionaResposta")) {
        $(".pergunta" + idPergunta).removeClass("selecionaResposta");
        if (id == "s" + idPergunta) {
            $("#n" + idPergunta).css("color", "grey");
        } else {
            $("#s" + idPergunta).css("color", "grey");
        }
    }
    $("#" + id).addClass("selecionaResposta");
    $("#" + id).css("color", "#2fabab");

}

function geraNota(idPergunta) {
    let divNota = '<div class="divNotas d-inline-flex justify-content-center" id="'+idPergunta+'">';
    divNota = divNota.concat('<div class="notaNA d-flex pergunta' + idPergunta + '" id="na' + idPergunta + '" onclick="escolheNota(event,' + idPergunta + ')" onmouseover="this.style.backgroundColor = \'rgb(210,225,225)\'" onmouseout="this.style.backgroundColor = \'rgb(202,193,193)\'" style="background-color: rgb(202,193,193);">N/A</div>');
    divNota = divNota.concat('<div class="nota d-flex pergunta' + idPergunta + '" id="0' + idPergunta + '" onclick="escolheNota(event,' + idPergunta + ')" onmouseover="this.style.backgroundColor = \'rgb(241, 102, 137)\'" onmouseout="this.style.backgroundColor = \'rgb(233,64,105)\'" style="background-color: rgb(233,64,105);">0</div>');
    divNota = divNota.concat('<div class="nota d-flex pergunta' + idPergunta + '" id="1' + idPergunta + '" onclick="escolheNota(event,' + idPergunta + ')" onmouseover="this.style.backgroundColor = \'rgb(238,129,138)\'" onmouseout="this.style.backgroundColor = \'rgb(230,91,105)\'" style="background-color: rgb(230,91,105);">1</div>');
    divNota = divNota.concat('<div class="nota d-flex pergunta' + idPergunta + '" id="2' + idPergunta + '" onclick="escolheNota(event,' + idPergunta + ')" onmouseover="this.style.backgroundColor = \'rgb(241,148,137)\'" onmouseout="this.style.backgroundColor = \'rgb(233,110,101)\'" style="background-color: rgb(233,110,101);">2</div>');
    divNota = divNota.concat('<div class="nota d-flex pergunta' + idPergunta + '" id="3' + idPergunta + '" onclick="escolheNota(event,' + idPergunta + ')" onmouseover="this.style.backgroundColor = \'rgb(244,166,126)\'" onmouseout="this.style.backgroundColor = \'rgb(236,128,94)\'" style="background-color: rgb(236,128,94);">3</div>');
    divNota = divNota.concat('<div class="nota d-flex pergunta' + idPergunta + '" id="4' + idPergunta + '" onclick="escolheNota(event,' + idPergunta + ')" onmouseover="this.style.backgroundColor = \'rgb(247,184,118)\'" onmouseout="this.style.backgroundColor = \'rgb(239,146,86)\'" style="background-color: rgb(239,146,86);">4</div>');
    divNota = divNota.concat('<div class="nota d-flex pergunta' + idPergunta + '" id="5' + idPergunta + '" onclick="escolheNota(event,' + idPergunta + ')" onmouseover="this.style.backgroundColor = \'rgb(250,196,108)\'" onmouseout="this.style.backgroundColor = \'rgb(242,158,76)\'" style="background-color: rgb(242,158,76);">5</div>');
    divNota = divNota.concat('<div class="nota d-flex pergunta' + idPergunta + '" id="6' + idPergunta + '" onclick="escolheNota(event,' + idPergunta + ')" onmouseover="this.style.backgroundColor = \'rgb(254,210,89)\'" onmouseout="this.style.backgroundColor = \'rgb(246,176,57)\'" style="background-color: rgb(246,176,57);">6</div>');
    divNota = divNota.concat('<div class="nota d-flex pergunta' + idPergunta + '" id="7' + idPergunta + '" onclick="escolheNota(event,' + idPergunta + ')" onmouseover="this.style.backgroundColor = \'rgb(257,227,67)\'" onmouseout="this.style.backgroundColor = \'rgb(249,189,35)\'" style="background-color: rgb(249,189,35);">7</div>');
    divNota = divNota.concat('<div class="nota d-flex pergunta' + idPergunta + '" id="8' + idPergunta + '" onclick="escolheNota(event,' + idPergunta + ')" onmouseover="this.style.backgroundColor = \'rgb(237,233,91)\'" onmouseout="this.style.backgroundColor = \'rgb(229,195,59)\'" style="background-color: rgb(229,195,59);">8</div>');
    divNota = divNota.concat('<div class="nota d-flex pergunta' + idPergunta + '" id="9' + idPergunta + '" onclick="escolheNota(event,' + idPergunta + ')" onmouseover="this.style.backgroundColor = \'rgb(161,238,162)\'" onmouseout="this.style.backgroundColor = \'rgb(153,200,130)\'" style="background-color: rgb(153,200,130);">9</div>');
    divNota = divNota.concat('<div class="nota d-flex pergunta' + idPergunta + '" id="10' + idPergunta + '" onclick="escolheNota(event,' + idPergunta + ')" onmouseover="this.style.backgroundColor = \'rgb(82,258,198)\'" onmouseout="this.style.backgroundColor = \'rgb(74,226,166)\'" style="background-color: rgb(74,226,166);">10</div></div>');
    divNota = divNota.concat('<div class="container d-flex justify-content-center"><hr style="width:80%;" /></div>');
    divNota = divNota.concat("</div>");
    return divNota
}

$(function () {
    $.ajax({
        url: 'http://localhost/NPS/questionario/busca_questionario',
        type: "GET",
        success: function (data) {
            data = JSON.parse(data);
            console.log(data);
            let inputResposta = "";
            for (let i = 0; i < data.length; i++) {
                if (data[i].TIPO_PERGUNTA == "NOTA") {
                    inputResposta = geraNota(data[i].ID_PERGUNTA_NPS);
                } else if (data[i].TIPO_PERGUNTA == "TEXTO") {
                    inputResposta = "<textarea class='form-control text-center pergunta" + data[i].ID_PERGUNTA_NPS + "' id='" + data[i].ID_PERGUNTA_NPS + "' style='width:50%;margin-left:25%'></textarea>";
                } else if (data[i].TIPO_PERGUNTA == "RADIO") {
                    inputResposta = "<div class='text-center' id='"+data[i].ID_PERGUNTA_NPS+"'><button type='button' id='s" + data[i].ID_PERGUNTA_NPS + "' onclick='escolheSimNao(event," + data[i].ID_PERGUNTA_NPS + ")' class='btn-primary btnNps pergunta" + data[i].ID_PERGUNTA_NPS + "'>Sim</button><button type='button' id='n" + data[i].ID_PERGUNTA_NPS + "' onclick='escolheSimNao(event," + data[i].ID_PERGUNTA_NPS + ")' class='btn-primary btnNps pergunta" + data[i].ID_PERGUNTA_NPS + "'>Não</button></div>";
                } else {
                    if (data[i].ID_PERGUNTA_NPS == 21) {
                        inputResposta = "<div class='text-center form-check d-flex justify-content-center'><input class='pergunta" + data[i].ID_PERGUNTA_NPS + " form-check-input' id='pergunta" + data[i].ID_PERGUNTA_NPS + "s' type='radio' name='pergunta" + data[i].ID_PERGUNTA_NPS + "' value='Sim'/><label class='form-check-label' for='pergunta" + data[i].ID_PERGUNTA_NPS + "s' style='margin-right:40px'>&nbspSim</label><input id='pergunta" + data[i].ID_PERGUNTA_NPS + "n' class='pergunta" + data[i].ID_PERGUNTA_NPS + " form-check-input' type='radio' name='pergunta" + data[i].ID_PERGUNTA_NPS + "' value='Não'/><label class='form-check-label' for='pergunta" + data[i].ID_PERGUNTA_NPS + "n' style='margin-right:40px'>&nbspNão</label><input class='pergunta" + data[i].ID_PERGUNTA_NPS + " form-check-input' type='radio' id='pergunta" + data[i].ID_PERGUNTA_NPS + "o' name='pergunta" + data[i].ID_PERGUNTA_NPS + "' value='Tenho personal'/><label class='form-check-label' for='pergunta" + data[i].ID_PERGUNTA_NPS + "o'>&nbspTenho personal</label></div>"
                    } else if (data[i].ID_PERGUNTA_NPS == 22) {
                        inputResposta = "<div class='text-center form-check d-flex justify-content-center'><input class='pergunta" + data[i].ID_PERGUNTA_NPS + " form-check-input' id='pergunta" + data[i].ID_PERGUNTA_NPS + "s' type='radio' name='pergunta" + data[i].ID_PERGUNTA_NPS + "' value='Sim'/><label class='form-check-label' for='pergunta" + data[i].ID_PERGUNTA_NPS + "s' style='margin-right:40px'>&nbspSim</label><input id='pergunta" + data[i].ID_PERGUNTA_NPS + "n' class='pergunta" + data[i].ID_PERGUNTA_NPS + " form-check-input' type='radio' name='pergunta" + data[i].ID_PERGUNTA_NPS + "' value='Não'/><label class='form-check-label' for='pergunta" + data[i].ID_PERGUNTA_NPS + "n' style='margin-right:40px'>&nbspNão</label><input class='pergunta" + data[i].ID_PERGUNTA_NPS + " form-check-input' type='radio' id='pergunta" + data[i].ID_PERGUNTA_NPS + "o' name='pergunta" + data[i].ID_PERGUNTA_NPS + "' value='Nao sabia desse beneficio'/><label class='form-check-label' for='pergunta" + data[i].ID_PERGUNTA_NPS + "o'>&nbspNão sabia desse benefício</label></div>"
                    }
                }
                if (data[i].ID_PERGUNTA_NPS != 3) {
                    $(".questionario").append(
                        "<h6 class='text-center pt-3'>" + data[i].PERGUNTA + "</h6>" +
                        inputResposta
                    )
                } else {
                    $(".questionario").append(
                        "<div class='text-center d-flex justify-content-center pt-3'><input id='pergunta3' type='checkbox' class='form-check-input pergunta3'/><label for='pergunta3' class='form-check-label text-center'>&nbsp;" + data[i].PERGUNTA + "</label></div>"
                    )
                }

                inputResposta = "";
            }
        },complete: function (data) {
            // $(".pergunta17").click(function(){
            //     if($(this).text() == "Não"){
            //         $(".pergunta18").hide();
            //         $(".pergunta19").hide();
            //         $(".pergunta20").css({
            //             'cssText': 'display: none !important'
            //         });
            //     }else{
            //         $(".pergunta18").show();
            //         $(".pergunta19").show();
            //         $(".pergunta20").each(function(){
            //             $(this).css({
            //                 'cssText': 'display: flex !important'
            //             });
            //         })
            //     }
            // });           
        }
    });



    $("#btnEnviaPesquisa").click(function () {
        let respostas = [];
        $(".selecionaResposta").each(function () {
            let idPergunta = $(this).parent().attr("id");
            respostas[idPergunta] = $(this).html();
        });
        respostas[2] =$(".pergunta2").val()
        respostas[3] = $(".pergunta3").prop("checked");
        respostas[18] = $(".pergunta18").val();
        respostas[21] = $('input[name="pergunta21"]:checked').val();
        respostas[22] = $('input[name="pergunta22"]:checked').val();
        respostas[23] = $(".pergunta23").val();
        console.log(respostas);
        $.ajax({
            url: "http://localhost/NPS/questionario/insere_questionario",
            type: "POST",
            data:{
                respostas: respostas
            },
            beforeSend: function(){
                $("#btnEnviaPesquisa").prop("disabled","true");
            },
            success: function(data){
                $(".questionario").hide();
                $("#btnEnviaPesquisa").hide();
            },
            error: function(xhr, status, error){
                console.log(xhr.responseText)
            }
        });
        respostas = [];
    });
});