package com.example.GestionContactos.dto;

import jakarta.validation.constraints.*;

public class CreateUserDTO {
    @NotBlank(message = "El nombre es obligatorio")
    @Size(min = 2, max = 50, message = "El nombre debe terner entre 2 y 50 caracteres")
    private String name;

    @Size(min = 10, max = 10, message = "El número debe tener exactamente 10 dígitos")
    @Pattern(regexp = "^\\d{10}$", message = "El número solo debe contener dígitos")
    private String numero;

    public CreateUserDTO() {
    }

    public CreateUserDTO(String name, String numero) {
        this.name = name;
        this.numero = numero;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }
}
