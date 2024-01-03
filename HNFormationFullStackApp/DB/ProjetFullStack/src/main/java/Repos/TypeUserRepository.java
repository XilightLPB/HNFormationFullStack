package Repos;

import org.springframework.data.jpa.repository.JpaRepository;

import Entity.TypeUser;

import java.util.List;

public interface TypeUserRepository extends JpaRepository<TypeUser,Integer> {
    List<TypeUser> findByType(String type);
}

