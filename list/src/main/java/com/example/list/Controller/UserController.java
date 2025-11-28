package com.example.list.Controller;

import org.apache.catalina.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping
public class UserController {
    private final UserService service;

    public UserController(UserService service){
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<Object> getById(@PathVariable("id") Long id){
        return service.findById(id)
                .map(u-> ResponseEntity.ok((Object) u))
                .orElse(
                       ResponseEntity.status(HttpStatus.NOT_FOUND)
                               .body(Map.of("error", "usuario no encontrado"))

                );
    }
    //2 listar con query
    @GetMapping
    public List<User> list(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String search
    ){
        return service.findAll(page,size,search);
    }
    //3. crear usuario
    @PostMapping
    public ResponseEntity<User> create(@RequestBody @Valid CreateUserDTO dto){
        User created = service.save(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }
    //4. Actualizar usuario
    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable Long id, @RequestBody  @Valid CreateUserDTO dto){
        return service.update(id,dto)
                .map(u -> ResponseEntity.ok((Object) u))
                .orElse(
                        ResponseEntity.status(HttpStatus.NOT_FOUND)
                                .body(Map.of("error","usuario no encontrado"))
                );
    }
}
