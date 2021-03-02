package se.demo.recipe.management.recipes;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Data
@Entity
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


    @NotNull
    @Column(unique = true)
    private String name;


    public static Tag from(final String name) {
        Tag tag = new Tag();
        tag.setName(name);
        return tag;
    }

}
