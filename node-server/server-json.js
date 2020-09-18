// inicializando um servidor web e retornando um Json como resposta

// módulos
    const http = require('http');//módulo http

    const servidor = http.createServer((request,response)=>{
    // controlando a url de acesso
        if(request.url === '/json'){// http://localhost:3000/json
        response.writeHead(200, { "Content-Type": "application/json" });
        const pessoa = {
            id: 1,
            nome: "Tadeu",
            sobrenome: "Nascimento"
        }; 
        // stringify converte o objeto pessoa para uma string Json
        response.end(JSON.stringify(pessoa));            
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
    // porta do servidor http://localhost:3000/
        servidor.listen(3000,()=>{
        console.log('Servidor rodando na porta 3000');
    });



