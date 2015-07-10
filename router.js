function route(handle, ruta, respuesta, postData){
	console.log("A punto de rutear una peticion para " + ruta);
	if (typeof handle[ruta] === 'function') {
    	handle[ruta](respuesta, postData);
  	} else {
   		console.log("No se encontro manipulador para " + ruta);
   		respuesta.writeHead(404, {"Content-Type": "text/html"});
    	respuesta.write("404 No Encontrado");
   		respuesta.end();
  	}
}

exports.route=route;