package HNFOrmations.ProjetFullStack.appServices;

import org.springframework.stereotype.Service;

import HNFOrmations.ProjetFullStack.Entity.User;

import java.util.List;

@Service
public interface UserService {
    List<User> findAll();
    User findById(int id);
    User save(User user);
    User deleteById(int id);
}
