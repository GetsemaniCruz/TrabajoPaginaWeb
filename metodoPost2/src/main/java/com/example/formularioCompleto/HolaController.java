package com.example.formularioCompleto;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HolaController {

    @PostMapping("/saludo")
    public String saludo(@RequestParam String nombre, @RequestParam String apellido, @RequestParam String correo,@RequestParam String contrasena) {
       // return "<p>Hola "+ nombre + " " + apellido + "" + correo + ""  + contrasena +  "</p>";
        return "<html>" +
                " <link rel=\"stylesheet\" href=\"Style.css\"> " +
                "<body>" +
                "<h1 class=\"title\"> Resultado </h1>" +
                "<p> " + nombre + "  " + apellido + "  "+ correo + "  " + contrasena + ".</p>" +
                "</body>"+
                "</html>";
    }
}
