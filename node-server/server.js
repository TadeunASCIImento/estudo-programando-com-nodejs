// inicializando um servidor web

// módulos
    const http = require('http');//módulo http

    const servidor = http.createServer((request,response)=>{
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1>Servidor acessado!</h1>");
        response.end();            
    });
    // porta do servido http://localhost:3000
    servidor.listen(3000,()=>{
        console.log('Servidor rodando na porta 3000');
    });



