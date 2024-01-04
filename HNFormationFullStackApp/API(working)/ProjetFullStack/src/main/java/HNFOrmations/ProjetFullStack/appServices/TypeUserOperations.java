package HNFOrmations.ProjetFullStack.appServices;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import HNFOrmations.ProjetFullStack.Repos.UserRepository;
import HNFOrmations.ProjetFullStack.Repos.TypeUserRepository;
import HNFOrmations.ProjetFullStack.Entity.TypeUser;
import HNFOrmations.ProjetFullStack.Entity.User;


public class TypeUserOperations implements TypeUserService {

	private TypeUserRepository typeUserRepository;
    private UserRepository userRepository;
    
    @Autowired
    public TypeUserOperations(TypeUserRepository typeUserRepository, UserRepository userRepository) {
        this.typeUserRepository = typeUserRepository;
        this.userRepository = userRepository;
    }
    
    @Override
    public List<TypeUser> findAll() {
        return typeUserRepository.findAll();
    }

    @Override
    public TypeUser findById(int id) {
        Optional<TypeUser> result = typeUserRepository.findById(id);
        TypeUser typeUser = null;
        if (result.isPresent()) {
            typeUser = result.get();
        }

        return typeUser;
    }

    @Override
    public TypeUser save(TypeUser typeUser) {
        return typeUserRepository.save(typeUser);
    }

    @Override
    public TypeUser deleteById(int id) {
        TypeUser typeUser = findById(id);
        List<User> usersWithThisType = userRepository.findByTypeUser(typeUser);

        for (User user : usersWithThisType) {
            user.setTypeUser(null);
            userRepository.save(user);
        }

        typeUserRepository.deleteById(id);
        return typeUser;
    }

    @Override
    public TypeUser findByType(String type) {
        List<TypeUser> typeUsers = typeUserRepository.findByType(type);
        if (!typeUsers.isEmpty()) {
            return typeUsers.stream().findFirst().get();
        }
        return null;
    }

}
