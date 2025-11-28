package com.example.examenget;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class HelloController {
    @PostMapping(
            path ="/saludo",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)

    public Map<String ,String> saludar (@RequestParam Map<String, String>datos){
        String nombre = datos.get("nombre");
        String apellidop = datos.get("apellidop");
        String apellidom = datos.get("apellidom");
        String correo = datos.get("correo");
        String contra = datos.get("contra");

        String mensaje = "Hola "+nombre+" "+apellidop+apellidom+" "+correo+" "+contra;
        return Map.of("mensaje",mensaje);
    }
}
