
$("#botao-login").click(function(e){
    e.preventDefault();
    
    var username = $("#login").val();
    var password = $("#senha").val();
    
    /*Estava faltado 3 coisas:*/

    //1) o JSON.stringfy envolvendo o JSON
    var dadosjson = JSON.stringify({"username": username, "password":password});
    
    $.ajax({
        //2) A barra após a URL
        url: "https://suap.ifrn.edu.br/api/v2/autenticacao/token/",
        dataType: 'json',
        data: dadosjson,
        type: 'POST',
        contentType: 'application/json',
        success: function (data) {
            //3) O campo do json retornado (data.token)
            alert(data.token);
        },
        error: function(data){
            alert("Impossível recuperar dados");
        }
    });

});
