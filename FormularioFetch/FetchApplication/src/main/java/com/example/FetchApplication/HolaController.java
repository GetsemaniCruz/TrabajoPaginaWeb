package com.example.FetchApplication;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
public class HolaController {
    @PostMapping(
            path ="/saludo",
            //enviar informacion en formato JSON
            consumes = MediaType.APPLICATION_JSON_VALUE,

            //devuelve la info en formato JSON
            produces = MediaType.APPLICATION_JSON_VALUE)

    public Map<String ,String> saludar (@RequestBody Map<String, String>datos){
        String nombre = datos.get("nombre");
        String apellidop = datos.get("apellidop");
        String apellidom = datos.get("apellidom");
        String fecha = datos.get("fechaNacimiento");
        String genero = datos.get("genero");

        String mensaje = "Hola "+nombre+" "+apellidop+" "+apellidom
                +" ("+genero+" nacido el "+fecha+") "+"bienvenido a springboot y top tops";

        return Map.of("mensaje",mensaje);
    }
}

