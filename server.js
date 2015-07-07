var server= require("http");
var url= require("url");

function inicio(){
	function peticionServidor(peticion, respuesta){
		var pathname = url.parse(peticion.url).pathname;
		console.log("peticion "  + pathname + " recibida");
		respuesta.writeHead(200,{"Content-Type":"text/html"});
		respuesta.write("<h1>hola mundo</h1>");
		respuesta.end();
	}
	server.createServer(peticionServidor).listen(8000);
	console.log("Inicio del servidor.");
}

exports.inicio=inicio;

