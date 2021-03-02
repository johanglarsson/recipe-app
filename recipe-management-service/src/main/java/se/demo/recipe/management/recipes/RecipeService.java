package se.demo.recipe.management.recipes;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Set;

import static java.util.stream.Collectors.toSet;


@Service
@RequiredArgsConstructor
public class RecipeService {

    private final RecipeRepository recipeRepository;

    private final TagRepository tagRepository;

    public Recipe registerRecipe(final Recipe recipe) {
        recipe.setTags(findAndRegisterTags(recipe.getTags()));
        return recipeRepository.save(recipe);
    }

    private Set<Tag> findAndRegisterTags(final Set<Tag> tags) {
        return tags.stream().map(tag -> tagRepository.findByName(tag.getName()).orElseGet(() -> tagRepository.save(tag))).collect(toSet());

    }
}
