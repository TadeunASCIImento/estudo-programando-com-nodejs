// inicializando um servidor web

// módulos
    const http = require('http');//módulo http

    const servidor = http.createServer((request,response)=>{
    // controlando a url de acesso
        if(request.url === '/mensagem'){
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1>Servidor acessado!</h1>");
        response.end();            
        }
        
    // informações referntes a requisição    
        const headers = request.headers;
        const method = request.method;
        const url = request.url;
    // exibe no console
        console.log("Headers");
        console.log(headers);
        console.log("Method: " + method);
        console.log("URL: " + url);

    });
    // porta do servidor http://localhost:3000
        servidor.listen(3000,()=>{
        console.log('Servidor rodando na porta 3000');
    });



