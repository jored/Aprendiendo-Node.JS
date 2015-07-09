var server= require("http");
var url= require("url");

function inicio(route, handle){
	function peticionServidor(peticion, respuesta){
		var dataPosteada = "";
		var pathname = url.parse(peticion.url).pathname;
		console.log("peticion "  + pathname + " recibida");

		peticion.setEncoding("utf8");

        peticion.addListener("data", function(trozoPosteado){
          dataPosteada += trozoPosteado;
          console.log("Recibido trozo POST '" + trozoPosteado + "'.");
         });

        peticion.addListener("end", function() {
      		route(handle, pathname, respuesta, dataPosteada);
    	});
    	
	}
	server.createServer(peticionServidor).listen(8000);
	console.log("Inicio del servidor.");
}

exports.inicio=inicio;

