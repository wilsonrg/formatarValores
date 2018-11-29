/*
* Formata um número para moeda com personalização da quantidade de casas decimais
*/
function formatarMoeda(value, decimais) {
    decimais = decimais || 2;
    var mi = value.length - parseInt(decimais);
    var sm = parseInt(mi / 3);
    var regx = "", repl = "";

    for (var i = 0; i < sm; i++) {
        regx = regx.concat('([0-9]{3})');
        repl = repl.concat('.$' + (i + 1));
    }

    regx = regx.concat('([0-9]{' + decimais + '})') + "$";
    repl = repl.concat(',$' + (sm + 1));
    value = value.toString().replace(new RegExp(regx, 'g'), repl);
    return (mi % 3) === 0 ? value.substr(1) : value;
}
var valor1 = '2502', decimal_01 = 2, decimal_02 = 1;
document.write("A) Valor: " + formatarMoeda(valor1,decimal_01) + " \n  B) Valor: " + formatarMoeda(valor1,decimal_02));
// Saída: A) Valor: 25,02 B) Valor: 250,2
