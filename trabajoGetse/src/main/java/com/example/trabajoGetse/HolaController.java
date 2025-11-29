package com.example.trabajoGetse;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class HolaController {
    @PostMapping(
            path ="/saludo",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)

    public Map<String ,String> saludar (@RequestBody Map<String, String> datos){
        String usuario = datos.get("usuario");
        String contra = datos.get("contra");

        String mensaje = "Hola "+usuario+" "+contra;
        return Map.of("mensaje",mensaje);
    }
}
