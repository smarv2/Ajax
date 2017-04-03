/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* El objetivo de este fichero es crear la clase objetoAjax (en
 JavaScript a las “clases” se les llama “prototipos”) */
function objetoAjax( ) {
    /*Primero necesitamos un objeto XMLHttpRequest que cogeremos del
     constructor para que sea compatible con la mayoría de navegadores
     posible. */
    this.objetoRequest = new ConstructorXMLHttpRequest();
}
function peticionAsincrona(url) { //Función asignada al método coger del objetoAjax.
    /*Copiamos el objeto actual, si usamos this dentro de la
     función que asignemos a onreadystatechange, no funcionará.*/
    var objetoActual = this;
    this.objetoRequest.open('GET', url, true); //Preparamos la conexión.
    /*Aquí no solo le asignamos el nombre de la función, sino la
     función completa, así cada vez que se cree un nuevo objetoAjax se
     asignara una nueva función. */
    this.objetoRequest.onreadystatechange = function () {
        switch (objetoActual.objetoRequest.readyState) {
            case 1:
                objetoActual.cargando();
                break;
            case 2:
                objetoActual.cargado();
                break;
            case 3:
                objetoActual.interactivo();
                break;
            case 4: /* Función que se llama cuando se
             completo la transmisión, se le envían 4 parámetros.*/
                objetoActual.completado(objetoActual.objetoRequest.status,
                        objetoActual.objetoRequest.statusText, objetoActual.objetoRequest.responseText, objetoActual.objetoRequest.responseXML);
                break;
        }
    }
    this.objetoRequest.send(null); //Iniciamos la transmisión de datos.
}
/*Las siguientes funciones las dejo en blanco ya que las
 redefiniremos según nuestra necesidad haciéndolas muy sencillas o
 complejas dentro de la página o omitiéndolas cuando no son
 necesarias.*/
function objetoRequestCargando() {}
function objetoRequestCargado() {}
function objetoRequestInteractivo() {}
function objetoRequestCompletado(estado, estadoTexto, respuestaTexto, respuestaXML) {}
/* Por último diremos que las funciones que hemos creado, pertenecen
 al ObjetoAJAX, con prototype, de esta manera todos los objetoAjax
 que se creen, lo harán conteniendo estas funciones en ellos*/
//Definimos la función de recoger información.
objetoAjax.prototype.coger = peticionAsincrona;
//Definimos una serie de funciones que sería posible utilizar y las dejamos en blanco en esta clase.
objetoAjax.prototype.cargando = objetoRequestCargando;
objetoAjax.prototype.cargado = objetoRequestCargado;
objetoAjax.prototype.interactivo = objetoRequestInteractivo;
objetoAjax.prototype.completado = objetoRequestCompletado;
