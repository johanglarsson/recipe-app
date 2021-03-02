package se.demo.recipe.management.recipes;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class TagService {

    private final RecipeRepository recipeRepository;

    private final TagRepository tagRepository;


    public void deleteTagById(final Long id) {
        List<Recipe> recipies = recipeRepository.findByTags_Id(id);
        if (recipies.size() > 0) {
            log.info("Fuck, the tag already exists {}", recipies);
            throw new IllegalCallerException("Unable to delete tag, it has relationship with a recipe");
        }
        tagRepository.deleteById(id);
    }

    public List<Tag> findAll() {
        return tagRepository.findAll();
    }

    public Tag registerTag(final String name) {
        return tagRepository.save(Tag.from(name));
    }

}
