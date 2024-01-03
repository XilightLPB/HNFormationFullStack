package Repos;

import Entity.User;
import Entity.TypeUser;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {
    List<User> findByTypeUser(TypeUser typeUser);
}
