/* 
	Permite a digitação de 
	* Números 0123456789
	* Exemplo: 
	* <form>
	*    <label>Campo: </label><input type="text" onkeypress="return somenteNumero(event);" value="" />
	* </form>
	*/
	function somenteNumero(num) { //onkeypress="return somenteNumero(event);"
		var tecla=(window.event)?event.keyCode:e.which;
		if((tecla>47 && tecla<58)){return true;}
		else{if (tecla==8 || tecla==0){return true;}else{return false;}}
	}
