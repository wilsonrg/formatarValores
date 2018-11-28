/* 
    * Exemplo: var a = moedaParaNumero("R$ 10,00");
    * var b = moedaParaNumero("R$ 100"); 
    * var c = moedaParaNumero("0,50"); 
    * var d = moedaParaNumero("1.500,00"); 
    * var e = moedaParaNumero("89"); 
    * Resultado 10 - 100 - 0.5 - 1500 - 89 
*/
    function moedaParaNumero(valor) {
        return isNaN(valor) == false ? parseFloat(valor) : parseFloat(valor.replace("R$", "").replace(".", "").replace(",", "."));
    }
    document.write('Exemplo: '+ moedaParaNumero("R$ 10,00") );
