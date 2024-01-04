package HNFOrmations.ProjetFullStack.Repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import HNFOrmations.ProjetFullStack.Entity.TypeUser;
import HNFOrmations.ProjetFullStack.Entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {
    List<User> findByTypeUser(TypeUser typeUser);
}
