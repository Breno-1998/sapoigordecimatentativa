//Adicionando o evento de clique ao botão '#botao-pula'

var distancia = 300;
var subir = 150;
$('#botao-pular').click(function(){
    
    //Alterando a propriedade css do elemento:
    $("#sapo").css('margin-top',subir);
    $("#sapo").css('margin-left', distancia);
    $('#sapo').css('margin-left', '800px').return;
    distancia = distancia + 50;
subir = subir + 50 - 30;
})