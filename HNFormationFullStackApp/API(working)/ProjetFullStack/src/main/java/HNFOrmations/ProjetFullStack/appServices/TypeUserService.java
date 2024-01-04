package HNFOrmations.ProjetFullStack.appServices;

import org.springframework.stereotype.Service;

import HNFOrmations.ProjetFullStack.Entity.*;

import java.util.List;

@Service
public interface TypeUserService {

        List<TypeUser> findAll();
        TypeUser findById(int id);
        TypeUser save(TypeUser typeUser);
        TypeUser deleteById(int id);

        TypeUser findByType(String type);
}
