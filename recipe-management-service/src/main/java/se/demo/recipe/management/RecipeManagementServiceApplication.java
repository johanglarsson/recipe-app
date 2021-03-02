package se.demo.recipe.management;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;
import se.demo.recipe.management.recipes.Recipe;
import se.demo.recipe.management.recipes.RecipeService;
import se.demo.recipe.management.recipes.Tag;

import java.util.Set;


@Slf4j
@SpringBootApplication
public class RecipeManagementServiceApplication {


    public static void main(String[] args) {
        SpringApplication.run(RecipeManagementServiceApplication.class);
    }


    @Component
    @RequiredArgsConstructor
    class LoadDatabase implements ApplicationRunner {
        private final RecipeService recipeService;

        @Override
        public void run(ApplicationArguments args) throws Exception {
            Recipe salsicciaRecipe = Recipe.builder().title("Tommys Pasta Salsiccia").uri("https://www.koket.se/tommys-pasta-salsiccia").description("Supergod pasta").rating(4).tags(Set.of(Tag.from("salsiccia"))).build();
            Recipe meatSauceRecipe = Recipe.builder().title("Isabellas Bästa kötfärsås").uri("https://www.koket.se/isabellas-basta-kottfarssas").description("Klassisk köttfärssås").rating(4.3).tags(Set.of(Tag.from("pasta"))).build();
            recipeService.registerRecipe(salsicciaRecipe);
            recipeService.registerRecipe(meatSauceRecipe);
            log.info("Primed database with recipe entries");

        }


    }
}
