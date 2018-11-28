/* 
	* Exemplo: var a = numeroParaMoeda(10); 
	* var b = numeroParaMoeda(100); 
	* var c = numeroParaMoeda(0.5); 
	* var d = numeroParaMoeda(1500); 
	* var e = numeroParaMoeda(89); 
	* Resultado "10,00" - "100,00" - "0,50" - "1.500,00" - "89,00"
*/
	function numeroParaMoeda(n, c, d, t) {
		c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "," : d, t = t == undefined ? "." : t, s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
		return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
	}
	document.write('Exemplo: '+ numeroParaMoeda(10) );
