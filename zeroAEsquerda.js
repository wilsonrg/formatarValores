/* 
* Permite a digitação de 0 a esquerda  
* str = número a direita
* Length = quantidade de zeros a esquerda
*/
function zeroAEsquerda(str, length) {
	const resto = length - String(str).length;
	return '0'.repeat(resto > 0 ? resto : '0') + str;
}
document.write('Exemplo: '+ zeroAEsquerda('35', 5) );
// Saída - Exemplo: 00035
