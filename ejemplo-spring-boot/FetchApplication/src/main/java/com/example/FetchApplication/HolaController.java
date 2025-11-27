package com.example.FetchApplication;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController

public class HolaController {
    @PostMapping(
            path ="/saludo",
            //recibe informacion en formato JSON
            consumes = MediaType.APPLICATION_JSON_VALUE,

            //devuelve la info en formato JSON
            produces = MediaType.APPLICATION_JSON_VALUE)

    public Map<String ,String> saludar (@RequestBody Map<String, String>datos){
        String nombre = datos.get("nombre");
        String apellido = datos.get("apellido");

        String mensaje = "Hola "+nombre+" "+apellido+" bienvenido a springboot y top tops";
        return Map.of("mensaje",mensaje);
    }
}

/*
datos
{"edad":25,
        "pais":"Mexico",
    "nombre":"javier",
        "apelldio":"arellano"}

mensaje
{"mensaje":"Hola javier arellano bienvenido a springboot y top tops"}

*/