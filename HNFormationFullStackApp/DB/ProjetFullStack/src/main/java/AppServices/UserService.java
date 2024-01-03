package AppServices;

import org.springframework.stereotype.Service;

import Entity.User;

import java.util.List;

@Service
public interface UserService {
    List<User> findAll();
    User findById(int id);
    User save(User user);
    User deleteById(int id);
}
