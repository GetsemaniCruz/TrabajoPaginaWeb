package com.example.FetchApplication;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
public class HolaController {
    @PostMapping(
            path = "/saludo",
            //enviar informacion en formato json
            consumes = MediaType.APPLICATION_JSON_VALUE,
            //devuelve la info en formato json
            produces = MediaType.APPLICATION_JSON_VALUE)

    public Map<String, String> saludar(@RequestBody Map<String, String> datos) {
        String nombre = datos.get("nombre");
        String apellido = datos.get("apellido");
        String mensaje = "Hola " + nombre + " " + apellido+"bienvenio a springboot";
        return Map.of("mensaje", mensaje);
    }
}

