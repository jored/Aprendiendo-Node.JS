var querystring = require("querystring");

function iniciar(respuesta, postData) {
  console.log("Manipulador de petición 'iniciar' ha sido llamado.");
  var body = '<html><head><meta http-equiv="Content-Type" content="text/html;charset=UTF-8" /></head>'+
    '<body>'+
    '<form action="/subir" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Enviar texto" />'+
    '</form>'+
    '</body>'+
    '</html>';
    respuesta.writeHead(200, {"Content-Type": "text/html"});
    respuesta.write(body);
    respuesta.end();
}

function subir(respuesta, dataPosteada) {
  console.log("Manipulador de petición 'subir' ha sido llamado.");
  respuesta.writeHead(200, {"Content-Type": "text/html"});
  respuesta.write("<h1>Tu enviaste: " + querystring.parse(dataPosteada)['text'] + "</h1>");
  respuesta.end();
}

exports.iniciar = iniciar;
exports.subir = subir;