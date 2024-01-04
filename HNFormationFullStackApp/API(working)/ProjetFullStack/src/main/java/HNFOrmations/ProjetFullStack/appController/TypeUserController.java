package HNFOrmations.ProjetFullStack.appController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


import HNFOrmations.ProjetFullStack.Entity.TypeUser;
import HNFOrmations.ProjetFullStack.Services.TypeUserService;

import java.util.List;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/type-users")
public class TypeUserController {

    private HNFOrmations.ProjetFullStack.appServices.TypeUserService typeUserService;

    @Autowired
    public TypeUserController(HNFOrmations.ProjetFullStack.appServices.TypeUserService Service) {
        this.typeUserService = Service;
    }

    @GetMapping("")
    public List<TypeUser> findAll() {
        return typeUserService.findAll();
    }

    @GetMapping("/{id}")
    public TypeUser findById(@PathVariable int id) {
        return typeUserService.findById(id);
    }

    @PostMapping("/create")
    public TypeUser addTypeUser(@RequestBody TypeUser typeUser) {
        return typeUserService.save(typeUser);
    }

    @PutMapping("/update")
    public TypeUser updateTypeUser(@RequestBody TypeUser typeUser) {
        int id = typeUser.getId();
        TypeUser dbTypeUser = typeUserService.findById(id);
        if (dbTypeUser == null) {
            throw new ResponseStatusException(NOT_FOUND, "Unable to find typeUser with id : " + id);
        }
        return typeUserService.save(typeUser);
    }

    @DeleteMapping("/{id}")
    public void deleteTypeUser(@PathVariable int id) {
        typeUserService.deleteById(id);
    }
}