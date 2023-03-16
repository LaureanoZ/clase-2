const http = require('node:http');





const server = http.createServer(function(request, response){
    console.log("Hola ¿como estas?");
    if(request.url == "/"){
        response.write("<h1>Mi espectacular pagina web!</h1>");
        response.write("Laureano Zalazar");
    }else if(request.url == "/materia"){
        response.write("<h1>Mi espectacular pagina web!</h1>");
        response.write("Aplicaciones Hibridas");
    }else if(request.url == "/profesor"){
        response.write("<h1>Mi espectacular pagina web!</h1>");
        response.write("Brian Esteban Lara Campos");
    }else if(request.url == "/productos"){
        let productos = {
            cafeExpreso:   ["Café Expreso", 200],
            cafeAmericano: ["Café Americano", 250],
            cafeCortado:   ["Café Cortado", 200],
            cafeDoble:     ["Café Doble", 250],
            cafeLagrima:   ["Café Lagrima", 200],
            }
        response.write("<h1>Mi espectacular pagina web!</h1>");
        response.write("<ul>");
        for (const key in productos) {
        const cafe = productos[key][0];
        const precio = productos[key][1];

        response.write(`<li>${cafe}: $${precio}</li>`);
        }
        response.write("</ul>");
    }else{
        response.write("<h1>Mi espectacular pagina web!</h1>");
        response.write("Pagina no encontrada - 404");
    }
    response.end();
})

server.listen(2022);