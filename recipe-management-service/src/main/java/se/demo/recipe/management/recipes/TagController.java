package se.demo.recipe.management.recipes;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class TagController {

    private final TagService tagService;

    @GetMapping("/api/v1/tags")
    List<Tag> findAll() {
        return tagService.findAll();
    }

    @DeleteMapping("/api/v1/tag/{tagId}")
    void deleteTagById(@PathVariable Long tagId) {
        tagService.deleteTagById(tagId);
    }

    @PostMapping("/api/v1/newtag")
    Tag registerTag(@RequestBody final String tag) {
        return tagService.registerTag(tag);
    }

}
