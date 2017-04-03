<%-- 
    Document   : espera
    Created on : 18/01/2017, 10:05:10 AM
    Author     : MXI01020253A
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <%
            Thread.sleep(5000);
            out.print("Ahora la espera es menos molesta.");
        %>
    </body>
</html>
