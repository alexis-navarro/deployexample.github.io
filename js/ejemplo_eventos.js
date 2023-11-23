/* Autor: Eli ALexis Navarro Gasca
    Fecha: 10/10/2023
*/
'use strict'

function btnSumar(){
    //Declaración de variables
    var val1 = document.getElementById("txtval1").value; //string
    var val2 = document.getElementById("txtval2").value;
    var suma = 0;
    var 
    //alert(typeof val1);

    //Proceso
    suma = parseInt(val1) + parseInt(val2);
    //var suma2 = suma + "";
    document.form1.txtRes.value = suma;

}