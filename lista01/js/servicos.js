$("#menu-setores").click(function(e) {
        e.preventDefault();        
		$("#conteudo").html("");
		$.getJSON("recursos/setores.json", function(data) {
			for (i=0; i<data.length; i++){
				if (data[i].campus == "ZN"){					
					$("#conteudo").append(data[i].nome);
					$("#conteudo").append("<br/>");	
				}
			}
		});
});

$("#menu-alunos").click(function(e) {
        e.preventDefault();       
		$("#conteudo").html("");
		url = "https://suap.ifrn.edu.br/api/v2/edu/alunos/20161041110001/?format=json";
		$.getJSON(url, function(data) {
			$("#conteudo").append(data[i].nome);
		});
});