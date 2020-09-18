module.exports = (idade)=>{
    let result = ()=> idade >= 18 ? true: false;
    return {
        mensagem: "É maior de idade? ",valor: result()
    };
};