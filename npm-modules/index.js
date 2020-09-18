// Módulos
    // módulo lodash importado para o projeto
    const _ = require('lodash');
    
    // Array de números inteiros usado no teste
    const numeros = [8, 10, 4, 3, 7, 9, 8, 2, 11,34,23,78 ];
    // exibe a saída no console 
    console.log('Exibindo os elementos de 2 em 2');
    _.chunk(numeros,2).forEach((numero) =>{
        console.log('--------');
        numero.forEach((x)=>{
            console.log(x);
        })
    });


