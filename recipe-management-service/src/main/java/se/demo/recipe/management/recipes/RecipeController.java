package se.demo.recipe.management.recipes;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000"})
class RecipeController {

    private final RecipeRepository recipeRepository;

    @GetMapping("/api/v1/recipies")
    List<Recipe> findAll() {
        log.info("Getting all recipies");
        return recipeRepository.findAll();
    }


    @PostMapping("/api/v1/recipe")
    Recipe saveRecipe(@RequestBody final Recipe recipe) {
        log.info("Saving pasta as {}", recipe);
        return recipeRepository.save(recipe);
    }

    @GetMapping("/api/v1/recipe/{recipeId}")
    Recipe findByRecipeId(@PathVariable final Long recipeId) {
        return recipeRepository.findById(recipeId).orElseThrow(NotFoundException::new);
    }

    @DeleteMapping("/api/v1/recipe/{recipeId}")
    void deleteRecipeById(@PathVariable final Long recipeId) {
        recipeRepository.deleteById(recipeId);
        log.info("Recipe {} deleted", recipeId);
    }

    @ExceptionHandler({NotFoundException.class})
    ResponseEntity<String> notFound(Exception ex) {
        return ResponseEntity.notFound().build();
    }
}
