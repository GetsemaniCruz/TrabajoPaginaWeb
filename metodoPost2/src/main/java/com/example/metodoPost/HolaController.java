package com.example.metodoPost;

import org.springframework.web.bind.annotation.*;

@RestController
public class HolaController {

    @PostMapping("/saludo")
    public String saludo(@RequestParam String nombre, @RequestParam String apellido) {
        return "<h1>Hola " + nombre + " " + apellido + "</h1>";
    }
}
