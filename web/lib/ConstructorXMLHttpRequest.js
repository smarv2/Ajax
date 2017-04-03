/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function ConstructorXMLHttpRequest() {
    if (window.XMLHttpRequest){ //Vemos si el objeto window (la base de la ventana del navegador) posee el método XMLHttpRequest(Navegadores como Mozilla y Safari). */
    
        return new XMLHttpRequest(); //Si lo tiene, crearemos el objeto con este método.
    } else if (window.ActiveXObject) { /*Sino tenía el método anterior, debería ser el Internet Exp. un navegador que emplea objetos ActiveX, lo mismo, miramos si tiene el método de creación. */
        /*Hay diferentes versiones del objeto, creamos un array, que contiene los diferentes tipos desde la versión mas reciente, hasta la mas antigua */
        var versionesObj = new Array(
                'Msxml2.XMLHTTP.5.0',
                'Msxml2.XMLHTTP.4.0',
                'Msxml2.XMLHTTP.3.0',
                'Msxml2.XMLHTTP',
                'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesObj.length; i++) {
            try {
                /*Intentamos devolver el objeto intentando crear las diferentes versiones se puede intentar crear uno que no existe y se producirá un error. */
                return new ActiveXObject(versionesObj[i]);
            } catch (errorControlado) //Capturamos el error, ya que podría crearse otro objeto.
            {

            }
        }
    }
    /* Si el navegador llego aquí es porque no posee manera alguna de crear el objeto, emitimos un mensaje de error. */
    throw new Error("No se pudo crear el objeto XMLHttpRequest");
}
