/**
 * 
 */
package Entity;


import jakarta.persistence.*;

@Entity
@Table(name ="user")
public class User {

	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @ManyToOne(cascade = {CascadeType.PERSIST})
    @JoinColumn(name = "type_user_id")
    private TypeUser typeUser;

    public User() {
    }

    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    
    public void setTypeUser(TypeUser typeUser) {
        this.typeUser = typeUser;
    }
    
    
    public int getId() {
        return id;
    }
    
    public String getName() {
        return name;
    }
    
    public String getEmail() {
        return email;
    }

    public TypeUser getTypeUser() {
        return typeUser;
    }


    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", typeUser=" + typeUser +
                '}';
    }
}
