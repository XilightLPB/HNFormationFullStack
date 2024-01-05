package HNFOrmations.ProjetFullStack.Repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import HNFOrmations.ProjetFullStack.Entity.TypeUser;

import java.util.List;

@Repository
public interface TypeUserRepository extends JpaRepository<TypeUser,Integer> {
    List<TypeUser> findByType(String type);
}

