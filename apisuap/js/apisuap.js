
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
            sessionStorage.setItem("token", data.token);
			window.location.href="index.html";
        },
        error: function(data){
            alert("Impossível recuperar dados");
        }
    });

});


$("#botao-meusdados").click(function(e){
	$.ajax({
		headers: { 
			"Authorization" : "JWT "+sessionStorage.getItem("token")
		},
        url: "https://suap.ifrn.edu.br/api/v2/minhas-informacoes/meus-dados/",
        contentType: 'application/json',
		dataType: 'json',
        type: 'GET',
        success: function (data) {
            $("#usuario-nome_usual").html(data.vinculo.nome);
            $("#usuario-tipo_vinculo").html(data.tipo_vinculo);
            $("#usuario-email").html(data.email);
        },
        error: function(data){
            alert("Impossível recuperar dados. Você deve fazer login!");
			window.location.href = "login.html";
        }
    });
});

$("#botao-sair").click(function(e){
	sessionStorage.removeItem("token");
	window.location.href="login.html";
});