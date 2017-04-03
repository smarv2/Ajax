<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- Para resolver los problemas con los acentos y la ñ debemos añadir la siguiente directiva y guardar este archivo con codificación UTF-8 con el bloc de notas, guardar como -->
<%@ page import="java.io.*" %>
<%
    request.setCharacterEncoding("UTF-8"); //Para resolver problemas con los acentos a la hora de recoger la información.
    try {
        String cadenaParaEscribir = request.getParameter("guardarEnFormatoTexto");
        String nombreArchivo = request.getParameter("nombreArchivo");
        //0.Lo siguiente es para hacer pruebas, úsalo en vez de usar las 2 líneas de arriba.
        //String cadenaParaEscribir = "Hola Mundo." ;
        //String nombreArchivo = "HolaMundo.txt";
        //1.Preparamos lo que queremos en formato de cadena dentro del buffer, se va almacenando.
        StringBuffer bufferSalida = new StringBuffer();
        bufferSalida.append(cadenaParaEscribir);
        //2.Preparamos el archivo para escribir.
        String camino = application.getRealPath("/" + nombreArchivo);
        System.out.println("camino: " + camino);
        File archivo = new File(camino);
        FileOutputStream cadenaSalida = new FileOutputStream(archivo);
        PrintWriter punteroEscritura = new PrintWriter(cadenaSalida);
        /*
        // Esto se hace por convención de estratificación.
        PrintWriter punteroEscritura = new PrintWriter(
        new FileOutputStream(
        application.getRealPath("/"+nombreArchivo)
        )
        );
        punteroEscritura.print(cadenaParaEscribir);
        punteroEscritura.close();
        */
        //3.Escribimos el archivo.
        punteroEscritura.print(bufferSalida);
        //4.Limpiamos y cerramos lo que hemos estado utilizando.
        punteroEscritura.flush();
        punteroEscritura.close();
        cadenaSalida.flush();
        cadenaSalida.close();
        out.print("<div style=\"color:green\">El archivo se guardo correctamente.< / div > ");
}
catch (Exception e) {
        out.print("<div style=\"color:red\">No se pudo guardar el archivo.< / div > ");
}
%>