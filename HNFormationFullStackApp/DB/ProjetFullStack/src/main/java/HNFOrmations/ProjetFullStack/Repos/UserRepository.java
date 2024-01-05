package HNFOrmations.ProjetFullStack.Repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import HNFOrmations.ProjetFullStack.Entity.TypeUser;
import HNFOrmations.ProjetFullStack.Entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    List<User> findByTypeUser(TypeUser typeUser);
}
