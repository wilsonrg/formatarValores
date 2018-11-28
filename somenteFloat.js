 /* 
    Permite a digitação de 
    * Ponto "."
    * Virgula ","
    * Números 0123456789
    * Exemplo: 
    * <form>
    *    <label>Campo: </label><input type="text" onkeypress="return somenteFloat(event);" value="" />
    * </form>
*/
    function somenteFloat(num) { //onkeypress="return somenteFloat(event);"
        var tecla=(window.event)?event.keyCode:e.which; //48 ao 57
        if(tecla>47 && tecla<58){return true;}
        else if(tecla == 46){return true;}
        else if(tecla == 44){return true;}
        else{if (tecla==8 || tecla==0){return true;}else{return false;}}
    }
