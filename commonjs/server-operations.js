// inicializando um servidor web e importando um módulo para aplicação

// módulos
    const http = require('http');//módulo http

    const operations = require('./operations');//importando o módulo criado

    // importando um módulo que possui uma função 
    const functions = require('./functions');

    const servidor = http.createServer((request,response)=>{
    // controlando a url de acesso
        if(request.url === '/operations'){
        response.writeHead(200, { "Content-Type": "application/json"});
        // retornando os valores do módulo operations na resposta  
        operations["maioridade"] = functions(operations.idade);
        response.end(JSON.stringify(operations));            
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



