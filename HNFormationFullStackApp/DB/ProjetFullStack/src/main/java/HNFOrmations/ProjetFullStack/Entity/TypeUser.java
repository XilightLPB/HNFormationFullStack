package HNFOrmations.ProjetFullStack.Entity;

import jakarta.persistence.*;


@Entity
@Table(name = "usertype")
public class TypeUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "usertype")
    private String type;

    public TypeUser() {
    }

    public TypeUser(String type) {
        this.type = type;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "TypeUser{" +
                "id=" + id +
                ", type='" + type + '\'' +
                '}';
    }
}
