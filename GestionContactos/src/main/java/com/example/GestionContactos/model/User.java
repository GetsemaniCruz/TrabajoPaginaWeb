package com.example.GestionContactos.model;

public class User {
    private Long id;
    private String name;
    private String numero;

    public User() {
    }

    public User(long id, String name, String numero) {
        this.id = id;
        this.name = name;
        this.numero = numero;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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
